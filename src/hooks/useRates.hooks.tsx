import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import apiRipioService from '../api/apiRipio.service';
import { useStore } from '../store';
import { Types } from '../store/types';
import { ECurrency, TCurrencyPairs } from '../types/currency.types';

const INITIAL_STATE = {
  [ECurrency.ARS]: { amount: 0, currencySymbol: '' },
  [ECurrency.BTC]: { amount: 0, currencySymbol: '' },
};
export const useRates = () => {
  const [balance, setBalance] = useState<TCurrencyPairs>(INITIAL_STATE);
  const { state, dispatch } = useStore();
  const { rates, fiatAmount, btcAmount } = state;

  const getRates = useCallback(async () => {
    try {
      const data = await apiRipioService.getRates();
      dispatch({ type: Types.setRates, payload: data });
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!rates.base) {
      getRates();
    }
  }, [rates.base, getRates]);

  const getFiatAmount = useCallback(() => {
    dispatch({ type: Types.setFiatAmount, payload: btcAmount });
  }, [btcAmount, dispatch]);

  useEffect(() => {
    if (!fiatAmount && btcAmount) {
      getFiatAmount();
    }
  }, [btcAmount, fiatAmount, getFiatAmount]);

  useEffect(() => {
    //review  this
    getFiatAmount();
    if (btcAmount) {
      setBalance({
        [ECurrency.ARS]: {
          amount: fiatAmount,
          currencySymbol: rates.names[ECurrency.ARS].symbol,
        },
        [ECurrency.BTC]: {
          amount: btcAmount,
          currencySymbol: rates.names[ECurrency.BTC].symbol,
        },
      });
    }
  }, [btcAmount, fiatAmount, rates.names, getFiatAmount]);

  return {
    balance,
  };
};

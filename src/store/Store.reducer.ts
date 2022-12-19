import { ECurrency } from '../types/currency.types';
import { FeesDTO, RatesDTO } from '../types/models.types';
import { ActionProps, TStoreState, Types } from './types';

export const INITIAL_RATES_STATE = {
  base: '',
  rates: { ARS_BUY: 0, ARS_SELL: 0 },
  names: {
    [ECurrency.ARS]: { name: '', symbol: '' },
    [ECurrency.BTC]: { name: '', symbol: '' },
  },
};

export const INITIAL_FEES_STATE = [];
export const initialState: TStoreState = {
  rates: INITIAL_RATES_STATE,
  fees: INITIAL_FEES_STATE,
  fiatAmount: 0,
  btcAmount: 1,
};

const setRates = (state: TStoreState, payload: RatesDTO) => {
  return { ...state, rates: payload };
};

const setFees = (state: TStoreState, payload: FeesDTO) => {
  let mappedData = [];
  for (const key in payload) {
    const obj = { key, amount: payload[key] };
    mappedData.push(obj);
  }
  return { ...state, fees: mappedData };
};

const setFiatAmount = (state: TStoreState, payload: number) => {
  return {
    ...state,
    fiatAmount: +(state.rates.rates.ARS_SELL * payload).toFixed(2),
  };
};

const setBTCAmount = (state: TStoreState, payload: number) => {
  return { ...state, btcAmount: payload };
};

export const Reducer = (state: TStoreState, { type, payload }: ActionProps) => {
  switch (type) {
    case Types.initialize: {
      return payload;
    }
    case Types.setRates: {
      return setRates(state, payload);
    }
    case Types.setFees: {
      return setFees(state, payload);
    }
    case Types.setFiatAmount: {
      return setFiatAmount(state, payload);
    }
    case Types.setBtcAmount: {
      return setBTCAmount(state, payload);
    }
    default: {
      return state;
    }
  }
};

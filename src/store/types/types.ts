import { FeesDTO, RatesDTO } from '../../types/models.types';

export enum Types {
  initialize = 'INITIALIZE',
  setFees = 'SET_FEES',
  setRates = 'SET_RATES',
  setFiatAmount = 'SET_FIAT_AMOUNT',
  setBtcAmount = 'SET_BTC_AMOUNT',
}

type ActionInitialize = {
  type: Types.initialize;
  payload: TStoreState;
};

type ActionSetRates = {
  type: Types.setRates;
  payload: RatesDTO;
};

type ActionSetFees = {
  type: Types.setFees;
  payload: FeesDTO;
};

type ActionSetFiatAmount = {
  type: Types.setFiatAmount;
  payload: number;
};

type ActionSetBtcAmount = {
  type: Types.setBtcAmount;
  payload: number;
};

export type ActionProps =
  | ActionInitialize
  | ActionSetRates
  | ActionSetFees
  | ActionSetFiatAmount
  | ActionSetBtcAmount;

export type TStoreState = {
  rates: RatesDTO;
  fees: FeesDTO;
  fiatAmount: number;
  btcAmount: number;
};

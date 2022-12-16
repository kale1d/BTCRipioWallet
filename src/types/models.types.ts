import { ECurrency, TCurrencyNames, TRates } from './currency.types';

export type RatesDTO = {
  base: ECurrency.BTC | string;
  rates: TRates;
  names: TCurrencyNames;
};

export type FeesDTO = {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
};

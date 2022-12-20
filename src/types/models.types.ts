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

export type TransactionDTO = {
  _id: Realm.BSON.ObjectId;
  date: Date;
  status: boolean;
  address: string;
  amount: number;
  transactionId: Realm.BSON.UUID;
};

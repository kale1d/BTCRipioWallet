export enum ECurrency {
  BTC = 'BTC',
  ARS = 'ARS',
}

export type TRates = {
  ARS_BUY: number;
  ARS_SELL: number;
};

export type TCurrencyNames = {
  [ECurrency.ARS]: TNameGroup;
  [ECurrency.BTC]: TNameGroup;
};

export type TNameGroup = {
  name: string;
  symbol: string;
};

type TCurrencyPair = {
  amount: number;
  currencySymbol: string;
};

export type TCurrencyPairs = {
  [ECurrency.ARS]: TCurrencyPair;
  [ECurrency.BTC]: TCurrencyPair;
};

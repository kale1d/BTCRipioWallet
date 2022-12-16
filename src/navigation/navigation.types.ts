import { StackNavigationProp } from '@react-navigation/stack';

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K]; initial?: boolean }
    : { screen: K; params: ParamList[K]; initial?: boolean };
}[keyof ParamList];

export type WalletStackParamList = {
  Home: undefined;
  SendBTC: undefined;
  Loading: undefined;
  MovementDetail: { id: string };
};

export type WalletStackStackNavigationProp<
  Route extends keyof WalletStackParamList,
> = StackNavigationProp<WalletStackParamList, Route>;

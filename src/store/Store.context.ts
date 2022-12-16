import { createContext, Dispatch, useContext } from 'react';
import { initialState } from './Store.reducer';
import { ActionProps, TStoreState } from './types';

export const AppContext = createContext<{
  state: TStoreState;
  dispatch: Dispatch<ActionProps>;
}>({ state: initialState, dispatch: () => null });

export const useStore = () => {
  return useContext(AppContext);
};

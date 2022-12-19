import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AppContext, initialState, Reducer } from '.';
import { Types } from './types';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const getValue = async () => {
      const btcAmount = await AsyncStorage.getItem('btcAmount');
      if (btcAmount) {
        dispatch({ type: Types.setBtcAmount, payload: +btcAmount });
      }
    };
    getValue();
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

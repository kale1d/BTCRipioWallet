import React, { FC, PropsWithChildren, useReducer } from 'react';
import { AppContext, initialState, Reducer } from '.';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

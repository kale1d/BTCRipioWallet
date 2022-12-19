/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { Navigation } from './src/navigation';
import { AppProvider } from './src/store/Store';
// import TransactionContext from './src/database/realm';
import { TransactionContext } from './src/database/realm';

const { RealmProvider } = TransactionContext;
const App = () => {
  return (
    <RealmProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </RealmProvider>
  );
};

export default App;

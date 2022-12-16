import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SendBTCScreen } from '../screens';
import { WalletStackParamList } from './navigation.types';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<WalletStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SendBTC" component={SendBTCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

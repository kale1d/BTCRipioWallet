import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button/Button';
import { useRates } from '../../hooks/useRates.hooks';
import { ECurrency } from '../../types/currency.types';
import { useNavigation } from '@react-navigation/native';
import { WalletStackNavigationProp } from '../../navigation/navigation.types';
import { MovementList } from './components/MovementList';

export const HomeScreen: React.FC = () => {
  const { balance } = useRates();
  const navigation = useNavigation<WalletStackNavigationProp<'Home'>>();

  const goToSend = useCallback(() => {
    navigation.navigate('SendBTC');
  }, [navigation]);

  return (
    <Layout>
      {balance && (
        <View>
          <Text>
            {balance[ECurrency.BTC].amount}{' '}
            {balance[ECurrency.BTC].currencySymbol}
          </Text>
          <Text>
            {balance[ECurrency.ARS].currencySymbol}{' '}
            {balance[ECurrency.ARS].amount}
          </Text>
          <Button title="Enviar" onPress={goToSend} />
        </View>
      )}
      <MovementList />
    </Layout>
  );
};

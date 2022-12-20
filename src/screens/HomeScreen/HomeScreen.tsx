import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button/Button';
import { useRates } from '../../hooks/useRates.hooks';
import { ECurrency } from '../../types/currency.types';
import { useNavigation } from '@react-navigation/native';
import { WalletStackNavigationProp } from '../../navigation/navigation.types';
import { MovementList } from './components/MovementList';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { balance } = useRates();
  const navigation = useNavigation<WalletStackNavigationProp<'Home'>>();

  const goToSend = useCallback(() => {
    navigation.navigate('SendBTC');
  }, [navigation]);

  return (
    <Layout>
      {balance && (
        <View style={styles.topContent}>
          <View style={styles.balanceContainer}>
            <Text style={[styles.title, styles.marginBottom]}>Tu saldo</Text>
            <Text style={styles.title}>
              {balance[ECurrency.BTC].amount}{' '}
              <Text style={styles.subtitle}>
                {balance[ECurrency.BTC].currencySymbol}
              </Text>
            </Text>
            <Text style={styles.subtitle}>
              {balance[ECurrency.ARS].currencySymbol}{' '}
              <Text style={styles.subtitle}>
                {balance[ECurrency.ARS].amount}
              </Text>
            </Text>
          </View>
          <Button style={styles.marginTop} title="Enviar" onPress={goToSend} />
        </View>
      )}
      <MovementList />
    </Layout>
  );
};

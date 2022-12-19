import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Layout } from '../../components/Layout';
import {
  WalletStackNavigationProp,
  WalletStackParamList,
} from '../../navigation/navigation.types';

export const LoadingScreen: React.FC = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'Loading'>>();
  const route = useRoute<RouteProp<WalletStackParamList, 'Loading'>>();
  const { isValid } = route.params || false;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <Layout>
      {isValid ? (
        <Text>Transacción realizada con éxito</Text>
      ) : (
        <Text>Hubo un error</Text>
      )}
    </Layout>
  );
};

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Layout } from '../../components/Layout';
import {
  WalletStackNavigationProp,
  WalletStackParamList,
} from '../../navigation/navigation.types';
import { Colors } from '../../theme';
import { styles, ACTIVITY_SIZE } from './LoadingScreen.styles';

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
      <View style={styles.container}>
        <ActivityIndicator
          size={ACTIVITY_SIZE}
          color={isValid ? Colors.SUCCESS : Colors.ERROR}
        />
        {isValid ? (
          <Text style={[styles.text, { color: Colors.SUCCESS }]}>
            Transacción realizada con éxito
          </Text>
        ) : (
          <Text style={[styles.text, { color: Colors.ERROR }]}>
            Hubo un error
          </Text>
        )}
      </View>
    </Layout>
  );
};

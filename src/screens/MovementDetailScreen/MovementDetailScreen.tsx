import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TransactionContext } from '../../database/realm';
import { Transaction } from '../../database/schemas/transaction.schema';
import { Layout } from '../../components/Layout';
import { WalletStackParamList } from '../../navigation/navigation.types';
import { parsedDate } from '../../utils/date';
import { Separator } from '../../components/Separator';
import { styles } from './MovementDetailScreen.styles';

const { useObject } = TransactionContext;

export const MovementDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<WalletStackParamList, 'MovementDetail'>>();
  const { _id } = route.params;
  const transaction = useObject(Transaction, _id);
  const date = parsedDate({ date: transaction?.date });
  const status = transaction?.status ? 'Realizada' : 'Rechazada';

  return (
    <Layout navigationHeader>
      <View style={styles.container}>
        <Text style={styles.textItem}>Fecha</Text>
        <Text style={styles.textInfo}>{date}</Text>
      </View>
      <Separator />
      <View style={styles.container}>
        <Text style={styles.textItem}>Monto</Text>
        <Text style={styles.textInfo}>{`${transaction?.amount} BTC`}</Text>
      </View>
      <Separator />
      <View style={styles.container}>
        <Text style={styles.textItem}>Dirección de destino</Text>
        <Text style={styles.textInfo}>{transaction?.address}</Text>
      </View>
      <Separator />
      <View style={styles.container}>
        <Text style={styles.textItem}>Estado</Text>
        <Text style={styles.textInfo}>{status}</Text>
      </View>
      <Separator />
      <View style={styles.container}>
        <Text style={styles.textItem}>ID de la transacción</Text>
        <Text style={styles.textInfo}>{transaction?.transactionId}</Text>
      </View>
      <Separator />
    </Layout>
  );
};

import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { TransactionContext } from '../../database/realm';
import { Transaction } from '../../database/schemas/transaction.schema';
import { Layout } from '../../components/Layout';
import { WalletStackParamList } from '../../navigation/navigation.types';
import { parsedDate } from '../../utils/date';

const { useObject } = TransactionContext;

export const MovementDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<WalletStackParamList, 'MovementDetail'>>();
  const { _id } = route.params;
  const transaction = useObject(Transaction, _id);
  const date = parsedDate({ date: transaction?.date });
  return (
    <Layout navigationHeader>
      <Text>{`Fecha: ${date}`}</Text>
      <Text>{`Monto: ${transaction?.amount} BTC`}</Text>
      <Text>{`Dirección de destino: ${transaction?.address}`}</Text>
      <Text>{`Estado: ${transaction?.status}`}</Text>
      <Text>{`ID de la transacción: ${transaction?.transactionId}`}</Text>
    </Layout>
  );
};

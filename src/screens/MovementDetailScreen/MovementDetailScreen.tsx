import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { TransactionContext } from '../../database/realm';
import { Transaction } from '../../database/schemas/transaction.schema';
import { Layout } from '../../components/Layout';
import { WalletStackParamList } from '../../navigation/navigation.types';

const { useObject } = TransactionContext;

export const MovementDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<WalletStackParamList, 'MovementDetail'>>();
  const { _id } = route.params;
  const transaction = useObject(Transaction, _id);
  const date = `${transaction?.date.getDate()}/${transaction?.date.getMonth()}/${transaction?.date.getFullYear()} - ${transaction?.date.getHours()}:${transaction?.date.getMinutes()} hs`;
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

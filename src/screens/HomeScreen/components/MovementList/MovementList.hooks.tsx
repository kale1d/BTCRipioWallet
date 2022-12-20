import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { WalletStackNavigationProp } from '../../../../navigation/navigation.types';
import { TransactionContext } from '../../../../database/realm';
import { Transaction } from '../../../../database/schemas/transaction.schema';
import { parsedDate } from '../../../../utils/date';
import { Pressable, Text, View } from 'react-native';
import {
  normalizeHorizontal,
  normalizeVertical,
  Spacing,
} from '../../../../theme';
import ApprovedIcon from '../../../../assets/approvedIcon.svg';
import ErrorIcon from '../../../../assets/errorIcon.svg';

const { useQuery } = TransactionContext;

export const useMovementList = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'Home'>>();
  const data = useQuery(Transaction).sorted('date', true);

  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => {
      const status = item.status ? 'Enviado' : 'Rechazado';
      const date = parsedDate({ date: item.date });
      const handleOnPress = () => {
        console.log(item._id);
        navigation.navigate('MovementDetail', { _id: item._id });
      };

      return (
        <Pressable
          onPress={handleOnPress}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginHorizontal: Spacing.space8H,
            marginVertical: Spacing.space8V,
          }}>
          <View
            style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: Spacing.space8H }}>
              {item.status ? (
                <ApprovedIcon
                  width={normalizeHorizontal(24)}
                  height={normalizeVertical(24)}
                />
              ) : (
                <ErrorIcon
                  width={normalizeHorizontal(24)}
                  height={normalizeVertical(24)}
                />
              )}
            </View>
            <View>
              <Text>{`Enviaste: ${item.amount} BTC`}</Text>
              <Text>{`Estado: ${status}`}</Text>
            </View>
          </View>
          <View>
            <Text>{date}</Text>
          </View>
        </Pressable>
      );
    },
    [navigation],
  );

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  return {
    renderItem,
    keyExtractor,
    data,
  };
};

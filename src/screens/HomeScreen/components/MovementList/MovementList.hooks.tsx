import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { WalletStackNavigationProp } from '../../../../navigation/navigation.types';
import { TransactionContext } from '../../../../database/realm';
import { Transaction } from '../../../../database/schemas/transaction.schema';
import { parsedDate } from '../../../../utils/date';
import ApprovedIcon from '../../../../assets/approvedIcon.svg';
import ErrorIcon from '../../../../assets/errorIcon.svg';
import { Separator } from '../../../../components/Separator';
import { styles, ICON_SIZE } from './MovementList.styles';

const { useQuery } = TransactionContext;

export const useMovementList = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'Home'>>();
  const data = useQuery(Transaction).sorted('date', true);

  const itemSeparator = useCallback(() => <Separator />, []);

  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => {
      const date = parsedDate({ date: item.date });
      const handleOnPress = () => {
        navigation.navigate('MovementDetail', { _id: item._id });
      };

      return (
        <Pressable onPress={handleOnPress} style={styles.item}>
          <View style={styles.info}>
            <View style={styles.icon}>
              {item.status ? (
                <ApprovedIcon width={ICON_SIZE} height={ICON_SIZE} />
              ) : (
                <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
              )}
            </View>
            <View>
              <Text style={[styles.subtitle, styles.colorBlack]}>
                Enviaste{' '}
                <Text style={[styles.colorBlack, styles.fontSize14]}>
                  {item.amount}
                </Text>{' '}
                BTC
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.subtitle}>{date}</Text>
          </View>
        </Pressable>
      );
    },
    [navigation],
  );

  const keyExtractor = useCallback(
    (_: Transaction, index: number) => `${index}`,
    [],
  );

  return {
    renderItem,
    keyExtractor,
    itemSeparator,
    data,
    styles,
  };
};

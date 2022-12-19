import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TransactionContext } from '../../../../database/realm';
import { TransactionDTO } from '../../../../types/models.types';
import ApprovedIcon from '../../../../assets/approvedIcon.svg';
import ErrorIcon from '../../../../assets/errorIcon.svg';
import { WalletStackNavigationProp } from '../../../../navigation/navigation.types';
import {
  Colors,
  normalizeFont,
  normalizeHorizontal,
  normalizeVertical,
  Spacing,
} from '../../../../theme';
import { useNavigation } from '@react-navigation/native';

const { useRealm } = TransactionContext;

export const MovementList: React.FC = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'Home'>>();
  const realm = useRealm();
  const data = realm.objects('Transaction').sorted('date', true);

  const renderItem = useCallback(
    ({ item }: { item: TransactionDTO }) => {
      const status = item.status ? 'Enviado' : 'Rechazado';

      const handleOnPress = () => {
        console.log(item._id);
        navigation.navigate('MovementDetail', { _id: item._id });
      };

      return (
        <Pressable
          onPress={handleOnPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: Spacing.space8H,
            marginVertical: Spacing.space8V,
          }}>
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
        </Pressable>
      );
    },
    [navigation],
  );

  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <FlatList
          ListHeaderComponent={<Text>Movimientos</Text>}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: normalizeFont(1),
                  marginHorizontal: Spacing.space8H,
                  backgroundColor: Colors.BLACK,
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

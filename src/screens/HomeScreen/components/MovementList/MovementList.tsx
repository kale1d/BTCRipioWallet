import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Spacing } from '../../../../theme';
import { Separator } from '../../../../components/Separator';
import { useMovementList } from './MovementList.hooks';

export const MovementList: React.FC = () => {
  const { renderItem, keyExtractor, data } = useMovementList();

  return (
    <View style={{ flex: 1, marginTop: Spacing.space24V }}>
      {data.length ? (
        <FlatList
          ListHeaderComponent={<Text>Movimientos</Text>}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return <Separator />;
          }}
        />
      ) : (
        <Text>No se registran movimientos</Text>
      )}
    </View>
  );
};

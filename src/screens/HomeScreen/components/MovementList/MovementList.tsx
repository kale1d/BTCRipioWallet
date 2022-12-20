import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useMovementList } from './MovementList.hooks';

export const MovementList: React.FC = () => {
  const { renderItem, keyExtractor, itemSeparator, data, styles } =
    useMovementList();

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          ListHeaderComponent={<Text style={styles.title}>Movimientos</Text>}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparator}
        />
      ) : (
        <Text style={styles.title}>No se registran movimientos</Text>
      )}
    </View>
  );
};

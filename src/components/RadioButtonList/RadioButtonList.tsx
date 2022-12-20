import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TFees } from '../../store/types';
import { Separator } from '../Separator';
import { styles } from './RadioButtonList.styles';

export const RadioButtonList: React.FC<{
  data: TFees[];
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ data, value, setValue }) => {
  const [internalValue, setInternalValue] = useState('');

  const handleOnPress = useCallback(
    (res: TFees) => {
      setValue(res.amount);
      setInternalValue(res.key);
    },
    [setValue],
  );
  return (
    <View>
      {data.map((res, i) => {
        return (
          <View key={res.key} style={styles.container}>
            <View style={styles.item}>
              <Text style={styles.radioText}>{res.key}</Text>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => handleOnPress(res)}>
                {internalValue === res.key && (
                  <View style={styles.selectedRb} />
                )}
              </TouchableOpacity>
            </View>
            {data.length - 1 !== i && <Separator />}
          </View>
        );
      })}
      {value ? (
        <Text style={styles.radioText}> Costo: {`${value} satoshis`} </Text>
      ) : null}
    </View>
  );
};

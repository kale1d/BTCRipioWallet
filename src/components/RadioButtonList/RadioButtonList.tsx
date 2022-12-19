import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TFees } from '../../store/types';

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
      {data.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            <Text style={styles.radioText}>{res.key}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => handleOnPress(res)}>
              {internalValue === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
          </View>
        );
      })}
      <Text> Selected: {value} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#3740ff',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});

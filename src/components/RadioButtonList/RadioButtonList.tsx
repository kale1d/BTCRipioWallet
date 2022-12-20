import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TFees } from '../../store/types';
import { Colors, normalizeFont, Spacing } from '../../theme';
import { Separator } from '../Separator';

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

const styles = StyleSheet.create({
  container: {},
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space8V,
  },
  radioText: {
    fontSize: normalizeFont(12),
    color: Colors.PURPLE_MOUNTAIN,
    fontWeight: '600',
  },
  radioCircle: {
    height: normalizeFont(15),
    width: normalizeFont(15),
    borderRadius: normalizeFont(40),
    borderWidth: normalizeFont(1),
    borderColor: Colors.MIDDLE_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: normalizeFont(5),
    height: normalizeFont(5),
    borderRadius: normalizeFont(40),
    backgroundColor: Colors.KOBI,
  },
  result: {
    marginTop: Spacing.space24H,
    fontWeight: '600',
  },
});

import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface IInputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  value: string;
}
export const Input: React.FC<IInputProps> = ({
  onChangeText,
  value,
  ...props
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    height: 45,
  },
});

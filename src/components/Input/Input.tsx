import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './Input.styles';

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

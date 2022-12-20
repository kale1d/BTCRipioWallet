import React from 'react';
import {
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Colors } from './../../theme';
import { styles } from './Button.styles';

interface ButtonProps extends PressableProps {
  title: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ title, loading = false, ...props }) => {
    const disabled = props.disabled || loading;
    return (
      <View style={styles.container}>
        <Pressable
          {...props}
          disabled={disabled}
          style={({ pressed }) => [
            pressed && {
              backgroundColor: Colors.KOBI,
            },
            disabled && {
              backgroundColor: Colors.DISABLED_PINK,
            },
            styles.button,
            props.style && (props.style as StyleProp<ViewStyle>),
          ]}>
          {({ pressed }) => (
            <View style={styles.flexDirectionRow}>
              {loading ? (
                <ActivityIndicator size="small" color={'#FFF'} />
              ) : (
                <Text
                  style={[
                    {
                      color: Colors.BLACK,
                    },
                    pressed && {
                      color: Colors.WHITE,
                    },
                    disabled && {
                      color: Colors.DARKGRAY,
                    },
                    styles.text,
                  ]}>
                  {title}
                </Text>
              )}
            </View>
          )}
        </Pressable>
      </View>
    );
  },
);

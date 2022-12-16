import React from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  Platform,
  ActivityIndicator,
  Text,
} from 'react-native';

import { Colors, Spacing } from './../../theme';
import { normalizeHorizontal, normalizeVertical } from './../../theme';

interface ButtonProps extends PressableProps {
  title: string;
  color?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ title, loading = false, ...props }) => {
    const disabled = props.disabled || loading;
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Pressable
          {...props}
          disabled={disabled}
          style={({ pressed }) => [
            {
              backgroundColor: Colors.PASTEL_PINK,
            },
            pressed && {
              backgroundColor: Colors.CAMEO_PINK,
            },
            styles.actionButtonStyle,
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
                      color: '#FFF',
                    },
                    disabled && {
                      color: 'grey',
                    },
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

const styles = StyleSheet.create({
  actionButtonStyle: {
    maxWidth: normalizeHorizontal(375),
    width: '100%',
    ...Platform.select({
      ios: {
        height: normalizeVertical(48),
      },
      android: {
        height: normalizeVertical(55),
      },
    }),
    borderRadius: normalizeVertical(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

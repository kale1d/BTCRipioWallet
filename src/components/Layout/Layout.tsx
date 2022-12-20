import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useCallback } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme';
import ChevronLeft from './../../assets/chevronLeft.svg';
import {
  styles,
  DEFAULT_HIT_SLOP,
  NAVIGATION_ICON_HEIGHT,
  NAVIGATION_ICON_WIDTH,
} from './Layout.styles';

type TLayout = PropsWithChildren & {
  navigationHeader?: boolean;
  handleGoBack?: () => void;
};
export const Layout: React.FC<TLayout> = ({
  children,
  navigationHeader = false,
  handleGoBack,
}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    if (handleGoBack) {
      handleGoBack();
    } else {
      navigation.goBack();
    }
  }, [handleGoBack, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {navigationHeader && (
        <Pressable
          style={({ pressed }) => [
            pressed && { opacity: 0.5 },
            styles.navigationButton,
          ]}
          hitSlop={DEFAULT_HIT_SLOP}
          onPress={goBack}>
          <ChevronLeft
            width={NAVIGATION_ICON_WIDTH}
            height={NAVIGATION_ICON_HEIGHT}
            style={{ color: Colors.BLACK } as StyleProp<ViewStyle>}
            testID="header-left-button"
          />
        </Pressable>
      )}

      {children}
    </SafeAreaView>
  );
};

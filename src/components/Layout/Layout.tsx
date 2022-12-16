import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useCallback } from 'react';
import { Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, normalizeFont, Spacing } from '../../theme';
import ChevronLeft from './../../assets/chevronLeft.svg';

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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#FAFAF4', marginHorizontal: 16 }}>
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
export const DEFAULT_HIT_SLOP = { top: 10, bottom: 10, left: 10, right: 10 };

export const NAVIGATION_ICON_WIDTH = normalizeFont(10);
export const NAVIGATION_ICON_HEIGHT = normalizeFont(14);
const styles = StyleSheet.create({
  navigationButton: {
    marginVertical: Spacing.space16V,
    marginRight: Spacing.space16H,
  },
});

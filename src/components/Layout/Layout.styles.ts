import { StyleSheet } from 'react-native';
import { Colors, normalizeFont, Spacing } from '../../theme';

export const DEFAULT_HIT_SLOP = { top: 10, bottom: 10, left: 10, right: 10 };

export const NAVIGATION_ICON_WIDTH = normalizeFont(10);
export const NAVIGATION_ICON_HEIGHT = normalizeFont(14);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    marginHorizontal: Spacing.space16H,
  },
  navigationButton: {
    marginVertical: Spacing.space16V,
    marginRight: Spacing.space16H,
  },
});

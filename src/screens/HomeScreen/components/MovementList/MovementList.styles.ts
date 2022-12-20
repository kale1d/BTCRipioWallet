import { StyleSheet } from 'react-native';
import { Colors, normalizeFont, Spacing } from '../../../../theme';

export const ICON_SIZE = normalizeFont(24);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spacing.space24V,
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: Spacing.space8H,
    marginVertical: Spacing.space8V,
    alignItems: 'center',
  },
  info: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: Spacing.space8H,
  },
  title: {
    fontSize: normalizeFont(20),
    fontWeight: '600',
  },
  subtitle: {
    fontSize: normalizeFont(12),
    color: Colors.DARKGRAY,
  },
  colorBlack: {
    color: Colors.BLACK,
  },
  fontSize14: {
    fontSize: normalizeFont(14),
    fontWeight: '600',
  },
});

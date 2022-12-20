import { StyleSheet } from 'react-native';
import { Colors, normalizeFont, Spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.space8V,
  },
  textItem: {
    fontSize: normalizeFont(12),
    fontWeight: '700',
    color: Colors.KOBI,
  },
  textInfo: {
    fontSize: normalizeFont(14),
    fontWeight: '600',
    color: Colors.MIDDLE_PURPLE,
  },
});

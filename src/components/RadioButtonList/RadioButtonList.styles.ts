import { StyleSheet } from 'react-native';
import { Colors, normalizeFont, Spacing } from '../../theme';

export const styles = StyleSheet.create({
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
    borderWidth: 1,
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

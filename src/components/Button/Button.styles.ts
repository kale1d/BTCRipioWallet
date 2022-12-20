import { Platform, StyleSheet } from 'react-native';
import {
  Colors,
  normalizeFont,
  normalizeHorizontal,
  normalizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
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
    backgroundColor: Colors.CAMEO_PINK,
  },
  text: {
    fontSize: normalizeFont(16),
    fontWeight: '500',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import { StyleSheet } from 'react-native';
import { normalizeFont } from '../../theme';

export const ACTIVITY_SIZE = normalizeFont(50);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalizeFont(20),
    fontWeight: '700',
  },
});

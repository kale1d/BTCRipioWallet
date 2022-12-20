import { StyleSheet } from 'react-native';
import { normalizeFont, Spacing } from '../../theme';

export const styles = StyleSheet.create({
  topContent: {
    marginBottom: Spacing.space24H,
  },
  balanceContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: normalizeFont(24),
  },
  subtitle: {
    fontSize: normalizeFont(16),
  },
  marginTop: {
    marginTop: Spacing.space16V,
  },
  marginBottom: {
    marginBottom: Spacing.space16V,
  },
});

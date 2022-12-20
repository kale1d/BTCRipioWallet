import { StyleSheet } from 'react-native';
import { Colors, normalizeFont, normalizeVertical, Spacing } from '../../theme';

const BORDER_RADIUS = normalizeFont(8);
export const styles = StyleSheet.create({
  input: {
    color: Colors.PURPLE_MOUNTAIN,
    paddingLeft: Spacing.space8H,
    borderWidth: 1,
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderColor: Colors.MIDDLE_PURPLE,
    height: normalizeVertical(45),
    marginVertical: Spacing.space8V,
    marginHorizontal: Spacing.space4H,
  },
});

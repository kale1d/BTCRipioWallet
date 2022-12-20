import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, normalizeFont } from '../../theme';

export const Separator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: normalizeFont(1),
    backgroundColor: Colors.PURPLE_MOUNTAIN,
  },
});

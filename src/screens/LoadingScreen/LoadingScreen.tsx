import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { Layout } from '../../components/Layout';

export const LoadingScreen: React.FC = () => {
  const route = useRoute();
  const isValid = route.params || false;

  return <Layout>{isValid ? <Text>Loading</Text> : <Text>Nope</Text>}</Layout>;
};

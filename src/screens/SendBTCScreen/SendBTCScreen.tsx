import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Layout } from '../../components/Layout';
import { RadioButtonList } from '../../components/RadioButtonList';
import { useSendBTC } from './SendBTC.hooks';
import { styles } from './SendBTCScreen.styles';

export const SendBTCScreen: React.FC = () => {
  const {
    address,
    amountValue,
    fees,
    disabled,
    feeValue,
    error,
    setFeeValue,
    setAddress,
    setAmountValue,
    handleOnConfirm,
  } = useSendBTC();

  return (
    <Layout navigationHeader>
      <View style={styles.inputContainer}>
        <Input
          keyboardType="numeric"
          value={amountValue}
          onChangeText={setAmountValue}
          placeholder="monto a enviar"
        />

        <Input
          value={address}
          onChangeText={setAddress}
          placeholder="dirección bitcoin"
        />
        {!!error && <Text>{error}</Text>}
      </View>
      <View style={styles.feesContainer}>
        {fees.length ? (
          <RadioButtonList
            data={fees}
            value={feeValue}
            setValue={setFeeValue}
          />
        ) : null}
      </View>
      <Button title="Enviar" onPress={handleOnConfirm} disabled={disabled} />
    </Layout>
  );
};

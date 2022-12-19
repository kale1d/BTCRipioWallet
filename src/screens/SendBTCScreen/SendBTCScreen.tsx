import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { Layout } from '../../components/Layout';
import { RadioButtonList } from '../../components/RadioButtonList';
import { useSendBTC } from './SendBTC.hooks';

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
      <Button title="Enviar" onPress={handleOnConfirm} disabled={disabled} />
      {fees.length ? (
        <RadioButtonList data={fees} value={feeValue} setValue={setFeeValue} />
      ) : null}
    </Layout>
  );
};

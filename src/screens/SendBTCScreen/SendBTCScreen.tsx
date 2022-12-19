import React, { useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { Layout } from '../../components/Layout';
import { useStore } from '../../store';
import { validateBTCAddress } from '../../utils/btc.regex';
import { useNavigation } from '@react-navigation/native';
import { WalletStackNavigationProp } from '../../navigation/navigation.types';
import { RadioButtonList } from '../../components/RadioButtonList';
import { useFees } from '../../hooks/useFees.hooks';
import { TransactionContext } from '../../database/realm';

const { useRealm } = TransactionContext;

export const SendBTCScreen: React.FC = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'SendBTC'>>();
  const { fees } = useFees();
  const realm = useRealm();

  const [amountValue, setAmountValue] = useState('');
  const [address, setAddress] = useState('');
  const {
    state: { btcAmount },
  } = useStore();
  const disabled = !amountValue || !address;

  const handleOnConfirm = useCallback(() => {
    const isBTCAddressValid = validateBTCAddress(address);
    const isAmountValid = +amountValue <= btcAmount;
    console.log(amountValue);
    if (isBTCAddressValid && isAmountValid) {
      realm.write(() =>
        realm.create('Transaction', {
          _id: new Realm.BSON.ObjectID(),
          transactionId: new Realm.BSON.UUID().toHexString(),
          date: new Date(),
          status: true,
          address,
          amount: +amountValue,
        }),
      );
      return navigation.navigate('Loading', { isValid: true });
    } else {
      navigation.navigate('Loading', { isValid: false });
    }
  }, [address, amountValue, btcAmount, navigation, realm]);

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
      <Button title="Enviar" onPress={handleOnConfirm} disabled={disabled} />
      {fees.length ? <RadioButtonList data={fees} /> : null}
    </Layout>
  );
};

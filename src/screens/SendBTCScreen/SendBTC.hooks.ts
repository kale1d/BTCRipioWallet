import { useNavigation } from '@react-navigation/native';
import { useFees } from '../../hooks/useFees.hooks';
import { WalletStackNavigationProp } from '../../navigation/navigation.types';
import { TransactionContext } from '../../database/realm';
import { useCallback, useState } from 'react';
import { useStore } from '../../store';
import { validateBTCAddress } from '../../utils/btc.regex';
import { satToBtc } from '../../utils/satToBtc';
import { Types } from '../../store/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { useRealm } = TransactionContext;

export const useSendBTC = () => {
  const navigation = useNavigation<WalletStackNavigationProp<'SendBTC'>>();
  const { fees } = useFees();
  const realm = useRealm();

  const [amountValue, setAmountValue] = useState('');
  const [address, setAddress] = useState('');
  const [feeValue, setFeeValue] = useState(0);
  const [error, setError] = useState('');
  const {
    dispatch,
    state: { btcAmount },
  } = useStore();
  const disabled = !amountValue || !address;

  const updateBTCAmount = useCallback(async () => {
    const feeInBTC = satToBtc({ sats: feeValue });
    const amountUpdated = btcAmount - +amountValue - feeInBTC;
    await AsyncStorage.setItem('btcAmount', amountUpdated.toString());
    dispatch({ type: Types.setBtcAmount, payload: amountUpdated });
  }, [amountValue, btcAmount, dispatch, feeValue]);

  const handleOnConfirm = useCallback(() => {
    const isBTCAddressValid = validateBTCAddress(address);
    const isAmountValid = +amountValue <= btcAmount;
    const randomBool = Math.random() > 0.5;
    // const randomBool = false;
    setError('');
    realm.write(() =>
      realm.create('Transaction', {
        _id: new Realm.BSON.ObjectID(),
        transactionId: new Realm.BSON.UUID().toHexString(),
        date: new Date(),
        status: randomBool,
        address,
        amount: +amountValue,
      }),
    );
    const isValidOperation = randomBool && isBTCAddressValid && isAmountValid;
    if (isValidOperation) {
      updateBTCAmount();
      return navigation.navigate('Loading', { isValid: randomBool });
    } else {
      if (!isBTCAddressValid) {
        setError(
          'La dirección de bitcoin ingresada es incorrecta, probá con otra',
        );
      } else if (!isAmountValid) {
        setError('El saldo ingresado es mayor al disponible');
      } else {
        navigation.navigate('Loading', { isValid: randomBool });
      }
    }
  }, [
    address,
    amountValue,
    btcAmount,
    navigation,
    realm,
    setError,
    updateBTCAmount,
  ]);

  return {
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
  };
};

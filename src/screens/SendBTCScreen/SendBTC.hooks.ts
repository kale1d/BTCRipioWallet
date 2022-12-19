import { useNavigation } from '@react-navigation/native';
import { useFees } from '../../hooks/useFees.hooks';
import { WalletStackNavigationProp } from '../../navigation/navigation.types';
import { TransactionContext } from '../../database/realm';
import { useCallback, useState } from 'react';
import { useStore } from '../../store';
import { validateBTCAddress } from '../../utils/btc.regex';
import { satToBtc } from '../../utils/satToBtc';
import { Types } from '../../store/types';

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

  const updateBTCAmount = useCallback(() => {
    const feeInBTC = satToBtc({ sats: feeValue });
    const amountUpdated = btcAmount - +amountValue - feeInBTC;
    dispatch({ type: Types.setBtcAmount, payload: amountUpdated });
  }, [amountValue, btcAmount, dispatch, feeValue]);

  const handleOnConfirm = useCallback(() => {
    const isBTCAddressValid = validateBTCAddress(address);
    const isAmountValid = +amountValue <= btcAmount;
    const randomBool = Math.random() > 0.5;
    setError('');
    if (randomBool) {
      if (isBTCAddressValid && isAmountValid) {
        //descontar saldo
        updateBTCAmount();
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
        return navigation.navigate('Loading', { isValid: randomBool });
      } else {
        if (!isBTCAddressValid) {
          setError(
            'La dirección de bitcoin ingresada es incorrecta, probá con otra',
          );
        } else if (!isAmountValid) {
          setError('El saldo ingresado es mayor al disponible');
        }
        //setError mostrando si la address es valida o si no alcanza el amount;
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

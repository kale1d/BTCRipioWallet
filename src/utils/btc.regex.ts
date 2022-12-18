const regExp = '([13]|bc1)[A-HJ-NP-Za-km-z1-9]{27,34}';
const btcRegExp = new RegExp(regExp);

export const validateBTCAddress = (value: string) => {
  return btcRegExp.test(value);
};

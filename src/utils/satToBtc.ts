// 1 satoshi = 0.000000001 BTC;
const SAT_BTC = 0.000000001;
export const satToBtc = ({ sats }: { sats: number }) => {
  return sats * SAT_BTC;
};

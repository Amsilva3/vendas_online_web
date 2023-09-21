export const convertNumberToMoney = (value: number): string => {
  return value.toLocaleString('de-De', { style: 'currency', currency: 'EUR' });
};

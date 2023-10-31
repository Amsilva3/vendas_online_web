import { convertNumberToMoney } from '../money';

describe('money', () => {
  it('should return cents', () => {
    const returnValue = convertNumberToMoney(543.73);

    expect(returnValue).toContain('€');
    expect(returnValue).toContain('543,73');
  });

  it('should return integer', () => {
    const returnValue = convertNumberToMoney(643);

    expect(returnValue).toContain('€');
    expect(returnValue).toContain('643,00');
  });
  it('should return thousand', () => {
    const returnValue = convertNumberToMoney(436643.43);

    expect(returnValue).toContain('€');
    expect(returnValue).toContain('436.643,43');
  });
});

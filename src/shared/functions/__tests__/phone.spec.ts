import { insertMaskInPhone } from '../phone';

describe('Test phone', () => {
  it('should return mask phone (send 9)', () => {
    const returnPhone = insertMaskInPhone('12345678901');

    expect(returnPhone).toEqual('(12) 34567-8901');
  });
  it('should return mask phone (send 8)', () => {
    const returnPhone = insertMaskInPhone('1234567890');

    expect(returnPhone).toEqual('(12) 3456-7890');
  });
});

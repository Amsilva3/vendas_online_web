import React, { useEffect, useState } from 'react';

import Input, { InputProps } from '../input/Input';
import { InputMoneyTestId } from './__tests__/InputMoney.spec';

interface InputMoneyProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const DECIMAL_SIZE = 2;

const InputMoney = ({ value, onChange, addonBefore = '€', ...props }: InputMoneyProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);
  useEffect(() => {
    const valueString = `${value}`;

    //0.00

    if (!/\D/.test(valueString.replace('.', ''))) {
      setCurrentValue(value.toFixed(DECIMAL_SIZE).toString().replace('.', ','));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //0.006

    const valueRemoved = event.target.value.replace(',', '');
    //0006
    const sizeSlice = valueRemoved.length - DECIMAL_SIZE;
    const newValue = [
      valueRemoved.slice(0, sizeSlice), //00
      '.',
      valueRemoved.slice(sizeSlice), //06
    ].join('');
    //00.06

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input
      data-testid={InputMoneyTestId.INPUT}
      addonBefore={addonBefore}
      value={currentValue}
      onChange={handleOnChange}
      {...props}
    />
  );
};

export default InputMoney;

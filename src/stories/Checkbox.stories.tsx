import { useState } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';

export const basic = ({ disabled, label, inputSize }) => {
  const [value, setValue] = useState<boolean>(true);

  return (
    <Checkbox
      disabled={disabled}
      value={value}
      onChange={setValue}
      label={label}
      inputSize={inputSize}
    />
  );
};

export default {
  component: Checkbox,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    style: {
      control: { disable: true },
    },
    value: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    label: {
      defaultValue: 'Enable free pizza',
    },
  },
};
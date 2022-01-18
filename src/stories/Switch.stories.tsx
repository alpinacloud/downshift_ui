import { useState } from 'react';
import Switch from '../components/Switch/Switch';

export const basic = ({ size, disabled, label }) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <Switch
      size={size}
      value={value}
      disabled={disabled}
      onChange={setValue}
      label={label}
    />
  );
};

export default {
  component: Switch,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    value: {
      control: { disable: true },
    },
    label: {
      defaultValue: 'I\'d like to receive fantastic spam offers',
    },
  },
};
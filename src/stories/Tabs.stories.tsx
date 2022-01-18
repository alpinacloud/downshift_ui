import { useState } from 'react';
import Tabs from '../components/Tabs/Tabs';

export const basic = ({ variant, text, size, disabled, shape }) => {
  const tabs = [{
    id: 'home',
    label: 'Home',
    disabled
  }, {
    id: 'products',
    label: 'Products',
    disabled
  }, {
    id: 'profile',
    label: 'Profile',
    disabled
  }, {
    id: 'settings',
    label: 'Settings',
    disabled
  }];

  const [value, setValue] = useState<string | number>(tabs[0].id);

  return (
    <Tabs
      variant={variant}
      tabs={tabs}
      value={value}
      size={size}
      shape={shape}
      onChange={tab => setValue(tab.id)}
    >
      {text}
    </Tabs>
  );
};

export default {
  component: Tabs,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    value: {
      control: { disable: true },
    },
    tabs: {
      control: { disable: true },
    },
  },
};
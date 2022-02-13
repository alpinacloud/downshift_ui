import { useState } from 'react';
import Autocomplete from '../components/Autocomplete/Autocomplete';

export const basic = ({ size }) => {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState('');

  const data = [{
    id: 0,
    label: 'Austria',
  }, {
    id: 1,
    label: 'Italy'
  }, {
    id: 2,
    label: 'Germany'
  }, {
    id: 3,
    label: 'Spain'
  }];

  return (
    <div style={{width: 360}}>
      <Autocomplete
        size={size}
        onChange={({ id }) => setValue(id)}
        onSearchChange={setSearch}
        search={search}
        value={value}
        searchFilter={(item) => {
          if (search.length < 2) return true;
          return typeof item.label === 'string' && item.label.toLowerCase().includes(search.toLowerCase())
        }}
        items={data}
      />
    </div>
  );
};

export default {
  component: Autocomplete,
  argTypes: {
    style: {
      control: { disable: true },
    },
    items: {
      control: { disable: true },
    },
    value: {
      control: { disable: true },
    },
    search: {
      control: { disable: true },
    },
    texts: {
      control: { disable: true },
    },
    popoverProps: {
      control: { disable: true },
    },
  },
};
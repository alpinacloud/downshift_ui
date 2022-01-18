import Select from '../components/Select/Select';

export const basic = ({ disabled, selectSize }) => {
  return (
    <Select
      disabled={disabled}
      selectSize={selectSize}
    >
      <option value="opt1">Option 1</option>
      <option value="opt2">Option 2</option>
      <option value="opt3">Option 3</option>
    </Select>
  );
};

export default {
  component: Select,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};
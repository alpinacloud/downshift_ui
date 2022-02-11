import Input from '../components/Input/Input';

export const basic = ({ value, disabled, inputSize, placeholder, type, capsule }) => {
  return (
    <Input
      type={type}
      inputSize={inputSize}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      capsule={capsule}
    />
  );
};

export default {
  component: Input,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    placeholder: {
      defaultValue: 'Some placeholder',
    },
    error: {
      defaultValue: 'Something is not valid',
    },
    type: {
      defaultValue: 'text',
      control: { type: 'radio' },
      options: ['text', 'password', 'number', 'email'],
    },
  },
};
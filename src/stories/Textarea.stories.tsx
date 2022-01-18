import Textarea from '../components/Textarea/Textarea';

export const basic = ({ value, disabled, inputSize, placeholder}) => {
  return (
    <Textarea
      inputSize={inputSize}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default {
  component: Textarea,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    placeholder: {
      defaultValue: 'Some placeholder',
    },
  },
};
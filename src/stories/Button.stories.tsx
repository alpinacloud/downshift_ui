import Button from '../components/Button/Button';

export const basic = ({ variant, btnSize, text, disabled, loading }) => {
  return (
    <Button
      variant={variant}
      btnSize={btnSize}
      disabled={disabled}
      loading={loading}
    >
      {text}
    </Button>
  );
};

export default {
  component: Button,
  argTypes: {
    text: {
      defaultValue: 'Button example',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};
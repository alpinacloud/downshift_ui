import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import { SuccessIcon } from '../static/icons';

export const basic = ({ variant, title, description, size, accent, asideExample }) => {
  return (
    <Alert
      variant={variant}
      title={title}
      description={description}
      size={size}
      accent={accent}
      style={{maxWidth: 640}}
      customIcon={variant === 'primary' ? SuccessIcon : undefined}
      aside={asideExample && (
        <Button variant="surface">Fix</Button>
      )}
    />
  );
};

export default {
  component: Alert,
  argTypes: {
    title: {
      defaultValue: 'Something went wrong',
    },
    description: {
      defaultValue: 'Lorem ipsum lots of dollars Lorem ipsum lots of dollars Lorem ipsum lots of dollars Lorem ipsum lots of dollars',
    },
    asideExample: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: 'success',
      control: { type: 'radio' },
      options: ['primary', 'surface', 'success', 'warning', 'error'],
    },
    aside: {
      control: { disable: true },
    },
    customIcon: {
      control: { disable: true },
    },
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
  },
};
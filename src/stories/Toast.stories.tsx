import Button from '../components/Button/Button';
import { SuccessIcon } from '../static/icons';
import toast from '../utils/toast';

export const basic = ({ withCustomIcon, position }) => {
  return (
    <>
      <Button
        variant="success"
        btnSize="lg"
        style={{marginBottom: 12}}
        onClick={() => toast.success('Great success!', {
          position,
          icon: withCustomIcon && SuccessIcon
        })}
      >
        Click to toast
      </Button>

      <Button
        variant="primary"
        btnSize="lg"
        style={{marginBottom: 12}}
        onClick={() => toast.loading('Loading...', {
          position,
        })}
      >
        Click to toast
      </Button>

      <Button
        variant="error"
        btnSize="lg"
        style={{marginBottom: 12}}
        onClick={() => toast.error('Error message', {
          position,
          icon: withCustomIcon && SuccessIcon
        })}
      >
        Click to toast
      </Button>
    </>
  );
};

export default {
  component: Button,
  argTypes: {
    withCustomIcon: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    position: {
      defaultValue: 'bottom-center',
      control: { type: 'radio' },
      options: ['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right'],
    },
    btnSize: {
      control: { disable: true },
    },
    variant: {
      control: { disable: true },
    },
    loading: {
      control: { disable: true },
    },
  },
};
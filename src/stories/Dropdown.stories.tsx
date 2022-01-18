import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';
import { ErrorIcon, SuccessIcon, WarningIcon } from '../static/icons';

const items = [{
  label: 'Profile',
  icon: SuccessIcon,
  id: 0,
}, {
  label: 'Settings',
  icon: WarningIcon,
  id: 1,
}, {
  label: 'Disabled',
  icon: ErrorIcon,
  disabled: true,
  id: 2,
}];

export const basic = ({ size, trigger }) => {
  return (
    <Dropdown
      size={size}
      items={items}
      onClick={console.log}
      popoverProps={{
        placement: 'bottom-start',
        trigger: trigger,
      }}
    >
      <Button variant="primary">
        Trigger
      </Button>
    </Dropdown>
  );
};

export default {
  component: Dropdown,
  argTypes: {
    trigger: {
      defaultValue: 'hover',
      control: { type: 'radio' },
      options: ['hover', 'click'],
    },
    items: {
      control: { disable: true },
    },
    activeId: {
      control: { disable: true },
    },
    popoverProps: {
      control: { disable: true },
    },
    style: {
      control: { disable: true },
    },
  },
};
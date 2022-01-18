import Menu from '../components/Menu/Menu';
import {SuccessIcon, ErrorIcon, WarningIcon} from '../static/icons';

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

export const basic = ({ size }) => {
  return (
    <Menu
      size={size}
      items={items}
      onClick={console.log}
      activeId={0}
    />
  );
};

export default {
  component: Menu,
  stories: [basic],
  argTypes: {
    style: {
      control: { disable: true },
    },
    activeId: {
      control: { disable: true },
    },
    items: {
      control: { disable: true },
    },
  }
};
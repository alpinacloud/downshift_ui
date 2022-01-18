import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export const basic = ({ size }) => {
  return (
    <Breadcrumb
      size={size}
      onClick={console.log}
      items={[{
        id: 'home',
        label: 'Home',
        asLink: true,
      }, {
        id: 'account',
        label: 'Account',
        asLink: true,
      }, {
        id: 'billing',
        label: 'Billing',
      }]}
    />
  );
};

export default {
  component: Breadcrumb,
  argTypes: {
    seperator: {
      control: { disable: true },
    },
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    items: {
      control: { disable: true },
    },
  }
};
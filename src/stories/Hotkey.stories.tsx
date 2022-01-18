import Hotkey from '../components/Hotkey/Hotkey';

export const basic = ({ size }) => {
  return (
    <>
      <Hotkey size={size}>Ctrl</Hotkey> + <Hotkey size={size}>Shift</Hotkey> + <Hotkey size={size}>X</Hotkey>
    </>
  );
};

export default {
  component: Hotkey,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
  }
};
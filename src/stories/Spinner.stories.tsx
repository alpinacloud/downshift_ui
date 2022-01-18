import Spinner from '../components/Spinner/Spinner';

export const basic = ({ size, animationType, color }) => {
  return (
    <Spinner size={size} animationType={animationType} color={color} />
  );
};

export default {
  component: Spinner,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
  },
};
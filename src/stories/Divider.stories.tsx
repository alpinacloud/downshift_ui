import Divider from '../components/Divider/Divider';

export const basic = ({ size, orientation }) => {
  return (
    <div style={{width: 640, height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Divider size={size} orientation={orientation} />
    </div>
  );
};

export default {
  component: Divider,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
  },
};
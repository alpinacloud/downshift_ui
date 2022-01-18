import Progress from '../components/Progress/Progress';

export const basic = ({ size, value }) => {
  return (
    <div style={{width: 300}}>
      <Progress
        size={size}
        value={value}
      />
    </div>
  );
};

export default {
  component: Progress,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    value: {
      defaultValue: 40,
      control: { type: 'number' },
    },
  },
};
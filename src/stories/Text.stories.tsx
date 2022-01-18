import Text from '../components/Text/Text';

export const basic = ({ size }) => {
  return (
    <div style={{width: 300}}>
      <Text size="xxl" weight="heavy" font="monospace">XXL Monospace</Text>
      <Text size="xxl" weight="normal" font="monospace">XXL Monospace</Text>
      <Text size="xxl" weight="thin" font="monospace">XXL Monospace</Text>

      <Text size="xxl" weight="heavy">XXL</Text>
      <Text size="xxl" weight="normal">XXL</Text>
      <Text size="xxl" weight="thin">XXL</Text>

      <Text size="xl" weight="heavy">XL</Text>
      <Text size="xl" weight="normal">XL</Text>
      <Text size="xl" weight="thin">XL</Text>

      <Text size="lg" weight="heavy">LG</Text>
      <Text size="lg" weight="normal">LG</Text>
      <Text size="lg" weight="thin">LG</Text>

      <Text size="md" weight="heavy">MD</Text>
      <Text size="md" weight="normal">MD</Text>
      <Text size="md" weight="thin">MD</Text>

      <Text size="sm" weight="heavy">SM</Text>
      <Text size="sm" weight="normal">SM</Text>
      <Text size="sm" weight="thin">SM</Text>
    </div>
  );
};

export default {
  component: Text,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    size: {
      control: { disable: true },
    },
    weight: {
      control: { disable: true },
    },
    color: {
      control: { disable: true },
    },
    font: {
      control: { disable: true },
    },
  },
};
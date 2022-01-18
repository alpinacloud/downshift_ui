import Tag from '../components/Tag/Tag';
import { SuccessIcon } from '../static/icons';

export const basic = ({ size, variant }) => {
  return (
    <Tag size={size} variant={variant}>
      {SuccessIcon}
      Processing done
    </Tag>
  );
};

export default {
  component: Tag,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    customColorScheme: {
      control: { disable: true },
    },
  },
};
import Tooltip from '../components/Tooltip/Tooltip';
import Button from '../components/Button/Button';

export const basic = ({ size, trigger, placement }) => {
  return (
    <>
      <Tooltip
        text="Tooltip has appeared!"
        size={size}
        placement={placement}
        trigger={trigger}
      >
        <Button variant="primary">Hover over me</Button>
      </Tooltip>

      <Tooltip
        text={
          <>
            <Button
              variant="link"
              style={{display: 'inline', padding: 0}}
            >
              Node
            </Button> has appeared!
          </>
        }
        style={{marginLeft: 12}}
        size={size}
        placement={placement}
        trigger={trigger}
      >
        <Button variant="primary">Hover over me to see a node</Button>
      </Tooltip>
    </>
  );
};

export default {
  component: Tooltip,
  argTypes: {
    style: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    text: {
      control: { disable: true },
    },
    overlayStyles: {
      control: { disable: true },
    },
  },
};
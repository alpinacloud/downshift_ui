import { Button } from '..';
import Popover from '../components/Popover/Popover';

export const basic = ({ placement, trigger }) => {
  return (
    <Popover
      trigger={trigger}
      placement={placement}
      overlay={
        <div style={{width: 320, backgroundColor: '#fff', padding: 12}}>
          Overlay!
        </div>
      }
    >
      <Button variant="primary" btnSize="lg">Trigger</Button>
    </Popover>
  );
};

export default {
  component: Popover,
  argTypes: {
    style: {
      control: { disable: true },
    },
    overlayStyles: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    overlay: {
      control: { disable: true },
    },
  }
};
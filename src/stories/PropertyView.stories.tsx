import PropertyView from '../components/PropertyView/PropertyView';
import Button from '../components/Button/Button';
import { SuccessIcon, ErrorIcon, WarningIcon } from '../static/icons';

const items = [{
  id: 'size',
  label: 'Size',
  value: '4.69 mb',
  icon: WarningIcon,
}, {
  id: 'ext',
  label: 'Extension',
  value: 'png',
  icon: SuccessIcon,
}, {
  id: 'link',
  label: 'Link',
  value: (
    <Button variant="link" style={{padding: 0}}>Open</Button>
  ),
  icon: ErrorIcon,
}];

export const basic = ({ size }) => {
  return (
    <div style={{width: 240}}>
      <PropertyView
        size={size}
        items={items}
      />
    </div>
  );
};

export default {
  component: PropertyView,
};
import Button from '../components/Button/Button';
import Card, { CardContent } from '../components/Card/Card';
import { SuccessIcon } from '../static/icons';

export const basic = ({
  title,
  description,
  spacing,
  iconSize,
  count,
  loading,
  withContent,
  withCounter,
  withAside,
  withExampleIcon,
}) => {
  return (
    <div style={{width: 480}}>
      <Card
        title={title}
        description={description}
        spacing={spacing}
        loading={loading}
        iconSize={iconSize}
        aside={withAside && (
          <Button variant="primary" btnSize="md">Just do it!</Button>
        )}
        icon={withExampleIcon && SuccessIcon}
        count={withCounter && count}
      >
        {withContent &&
          <>
            <CardContent spacing={spacing}>
              Content goes here
            </CardContent>
            <CardContent spacing={spacing}>
              Content goes here
            </CardContent>
            <CardContent contrast spacing={spacing}>
              <div style={{display: 'flex'}}>
                <Button variant="primary">Submit</Button>
                <Button variant="surface" style={{marginLeft: 12}}>Cancel</Button>
              </div>
            </CardContent>
          </>
        }
      </Card>
    </div>
  );
};

export default {
  component: Card,
  argTypes: {
    title: {
      defaultValue: 'Card title',
    },
    description: {
      defaultValue: 'Lorem ipsum lots of dollars',
    },
    count: {
      defaultValue: 12,
      control: { type: 'number' },
    },
    iconSize: {
      defaultValue: 26,
      control: { type: 'number' },
    },
    withAside: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    withExampleIcon: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    withContent: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    withCounter: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    cardHeaderStyles: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    aside: {
      control: { disable: true },
    },
  },
};
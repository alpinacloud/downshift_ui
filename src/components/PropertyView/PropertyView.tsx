import React, {FC, ReactNode} from 'react';
import styled from '@emotion/styled';
import { PropsOf } from '@emotion/react';

export type Property = PropsOf<'div'> & {
  id: string | number;
  label: string | ReactNode;
  value: string | ReactNode;
  icon?: ReactNode;
};

export type Props = {
  size: 'sm' | 'md' | 'lg',
  items: Property[];
};

const Menu: FC<Props> = ({
  size = 'md',
  items,
  ...rest
}) => {
  return (
    <Root {...rest}>
      {items.map(item => (
        <Property key={item.id} size={size}>
          <span className="label">
            {item.icon}
            {item.label}
          </span>
          <span className="value">
            {item.value}
          </span>
        </Property>
      ))}
    </Root>
  );
}

const Root = styled.div(props => ({
  width: '100%',
  padding: props.theme.space.md,
}));

const Property = styled.div<Pick<Props, 'size'>>(props => ({
  width: '100%',
  marginBottom: props.theme.space[props.size] / 1.75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  'span.label': {
    fontSize: props.theme.fontSize[props.size],
    color: props.theme.color.text,
    display: 'flex',
    alignItems: 'center',
    minWidth: '50%',
    alignSelf: 'flex-start',

    'svg': {
      width: props.theme.fontSize[props.size],
      height: props.theme.fontSize[props.size],
      marginRight: props.theme.space.sm / 2,
      fill: props.theme.color.text,
    },
  },

  'span.value': {
    color: props.theme.color.text,
    textAlign: 'right',
  }
}));

export default Menu;
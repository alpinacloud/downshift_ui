import React, {CSSProperties, FC, ReactNode} from 'react';
import styled from '@emotion/styled';

export type MenuItem = {
  id: string | number;
  label: string | ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type Props = {
  size?: 'sm' | 'md' | 'lg',
  style?: CSSProperties;
  items: MenuItem[];
  activeId?: string | number | null;
  onClick?: (item: MenuItem) => void;
};

const Menu: FC<Props> = ({
  size = 'md',
  items,
  activeId,
  onClick,
  style,
}) => {
  return (
    <Root style={style}>
      {items.map(item => (
        <Item
          key={item.id}
          size={size}
          disabled={item.disabled}
          isActive={item.id === activeId}
          onClick={onClick ? () => onClick(item) : undefined}
        >
          {item.icon}
          {item.label}
        </Item>
      ))}
    </Root>
  );
}

const Root = styled.div(props => ({
  width: '100%',
  padding: props.theme.space.sm,
  borderRadius: props.theme.radius,
  backgroundColor: props.theme.color.surface,
  border: `1px solid ${props.theme.color.contrast}`,
}));

const Item = styled.button<Pick<Props, 'size'> & { isActive: boolean }>(props => ({
  width: '100%',
  border: 0,
  borderRadius: props.theme.radius,
  backgroundColor: props.isActive
    ? props.theme.color.primary
    : props.theme.color.surface,
  color: props.isActive
    ? props.theme.color.primaryText
    : props.theme.color.text,
  padding: props.theme.space[props.size] / 2,
  marginBottom: props.theme.space[props.size] / 1.75,
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  textAlign: 'left',
  fontSize: props.theme.fontSize[props.size],
  fontWeight: props.theme.fontWeight.normal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  'svg': {
    width: props.theme.fontSize[props.size],
    height: props.theme.fontSize[props.size],
    marginRight: props.theme.space.sm / 2,
    fill: props.isActive ?
      props.theme.color.primaryText
      : props.theme.color.text,
  },

  '&:disabled': {
    opacity: props.theme.disabledOpacity,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
  '&:not(:disabled):hover': {
    backgroundColor: props.isActive ? undefined : props.theme.color.contrast,
    color: props.isActive ? undefined : props.theme.color.heading,

    'svg': {
      fill: props.isActive ? undefined : props.theme.color.heading,
    },
  },
  '&:not(:disabled):focus': {
    boxShadow: props.theme.shadow.ring(props),
  },
}));

export default Menu;
import React, { CSSProperties, FC, ReactNode, Fragment } from 'react';
import styled from '@emotion/styled';
import { ChevronRight } from '../../static/icons';

export type BreadcrumbItem = {
  id: string;
  label: string | ReactNode;
  asLink?: boolean;
};

type Props = {
  items: BreadcrumbItem[];
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  seperator?: ReactNode;
  onClick?: (item: BreadcrumbItem) => void,
  className?: string;
}

const Breadcrumb: FC<Props> = ({
  size = 'md',
  seperator = ChevronRight,
  items = [],
  className,
  style,
  onClick,
}) => {
  const handleClick = (item: BreadcrumbItem) => () => onClick(item);

  return (
    <Root size={size} style={style} className={className}>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <Item size={size} asLink={item.asLink} onClick={handleClick(item)}>
            {item.label}
          </Item>
          {index !== (items.length - 1) && <Seperator size={size}>{seperator}</Seperator>}
        </Fragment>
      ))}
    </Root>
  );
}

const Root = styled.div<Pick<Props, 'size'>>(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const Item = styled.a<Pick<Props, 'size'> & Pick<BreadcrumbItem, 'asLink'>>(props => ({
  padding: props.theme.space[props.size],
  paddingTop: props.theme.space[props.size] / 2,
  paddingBottom: props.theme.space[props.size] / 2,
  color: props.asLink ? props.theme.color.primary : props.theme.color.text,
  fontSize: props.theme.fontSize[props.size],
  fontWeight: props.theme.fontWeight.normal,
  cursor: props.asLink ? 'pointer' : undefined,
  transition: `color ${props.theme.speed}s, box-shadow ${props.theme.speed}s`,
  borderRadius: props.theme.radius,

  '&:hover': {
    color: props.asLink ? props.theme.color.primaryHard : undefined,
  },
  '&:focus, &:active': {
    boxShadow: props.theme.shadow.ring(props),
  },
}));

const Seperator = styled.div<Pick<Props, 'size'>>(props => ({
  width: props.theme.space[props.size] * 2,
  height: props.theme.space[props.size] * 2,
  margin: `0 ${props.theme.space[props.size]}`,

  'svg': {
    width: props.theme.space[props.size] * 2,
    height: props.theme.space[props.size] * 2,
    fill: props.theme.color.contrast,
  }
}));

export default Breadcrumb;
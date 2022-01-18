import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  className?: string;
}

const Divider: FC<Props> = ({
  size = 'md',
  orientation = 'horizontal',
  className,
  style,
}) => {
  return (
    <Root size={size} orientation={orientation} style={style} className={className} />
  );
}

const sizeMap = {
  'sm': 1,
  'md': 2,
  'lg': 3,
};

const Root = styled.hr<Pick<Props, 'size' | 'orientation'>>(props => ({
  width: props.orientation === 'horizontal' ? '100%' : 'auto',
  height: props.orientation === 'vertical' ? '100%' : 'auto',
  display: 'block',
  border: 0,
  borderStyle: 'solid',
  borderTopWidth: props.orientation === 'horizontal' ? sizeMap[props.size] : 0,
  borderLeftWidth: props.orientation === 'vertical' ? sizeMap[props.size] : 0,
  borderColor: props.theme.color.contrast,
}));

export default Divider;
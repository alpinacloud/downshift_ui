import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';
import { spin } from '../../static/keyframes';
import { ThemeSchema } from '../../themes/light';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  animationType?: 'ease' | 'linear';
  style?: CSSProperties;
  className?: string;
  color?: keyof ThemeSchema['color'];
}

const Spinner: FC<Props> = ({
  size = 'md',
  color = 'primary',
  animationType = 'ease',
  style,
  className,
}) => {
  return (
    <Root
      size={size}
      color={color}
      animationType={animationType}
      style={style}
      className={className}
    />
  );
}


const Root = styled.div<Pick<Props, 'size' | 'animationType' | 'color'>>(props => ({
  display: 'inline-block',
  width: props.theme.space[props.size] * 3,
  height: props.theme.space[props.size] * 3,
  border: `${props.theme.space[props.size] / 2}px solid transparent`,
  borderRadius: '50%',
  borderLeftColor: props.theme.color[props.color],
  borderTopColor: props.theme.color[props.color],
  animation: `${spin} 0.7s ${props.animationType === 'ease' ? 'ease-in-out' : 'linear'} infinite`,
}));

export default Spinner;
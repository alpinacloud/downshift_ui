import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  value?: number;
  className?: string;
}

const Progress: FC<Props> = ({
  size = 'md',
  value = 0,
  style,
  className,
}) => {
  return (
    <Root size={size}  style={style} className={className}>
      <Inner style={{width: `${value}%`}} />
    </Root>
  );
}


const Root = styled.div<Pick<Props, 'size'>>(props => ({
  width: '100%',
  backgroundColor: props.theme.color.contrast,
  height: props.theme.space[props.size] / 2,
  borderRadius: props.theme.radius,
  overflow: 'hidden',
}));

const Inner = styled.div<Pick<Props, 'size'>>(props => ({
  backgroundColor: props.theme.color.primary,
  height: '100%',
}));

export default Progress;
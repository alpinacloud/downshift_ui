import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

const Hotkey: FC<Props> = ({
  size = 'md',
  className,
  style,
  children,
}) => {
  return (
    <Root size={size} style={style} className={className}>
      {children}
    </Root>
  );
}

const Root = styled.span<Pick<Props, 'size'>>(props => ({
  display: 'inline-block',
  borderRadius: props.theme.radius,
  borderBottomLeftRadius: props.theme.space[props.size] / 2,
  borderBottomRightRadius: props.theme.space[props.size] / 2,
  borderWidth: props.theme.space[props.size] / 6,
  borderBottomWidth: props.theme.space[props.size] / 2.5,
  backgroundColor: props.theme.color.contrast,
  borderColor: props.theme.color.contrastHard,
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color.text,
  fontSize: props.theme.fontSize[props.size],
  borderStyle: 'solid',
  padding: props.theme.space[props.size],
  paddingTop: props.theme.space[props.size] / 3,
  paddingBottom: props.theme.space[props.size] / 3,
}));

export default Hotkey;
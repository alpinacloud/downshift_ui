import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'error';
  style?: CSSProperties;
  className?: string;
  customColorScheme?: { text: string; background: string };
}

const Tag: FC<Props> = ({
  size = 'md',
  variant = 'primary',
  customColorScheme,
  children,
  style,
  className,
}) => {
  return (
    <Root
      size={size}
      customColorScheme={customColorScheme}
      variant={variant}
      style={style}
      className={className}
    >
      {children}
    </Root>
  );
}


const Root = styled.span<Pick<Props, 'size' | 'variant' | 'customColorScheme'>>(props => {
  const color = props.customColorScheme ? props.customColorScheme.text : props.theme.color[props.variant + 'Text'];

  return {
    backgroundColor: props.customColorScheme ? props.customColorScheme.background : props.theme.color[props.variant],
    color,
    padding: props.theme.fontSize[props.size] / 1.5,
    paddingTop: props.theme.fontSize[props.size] / 2,
    paddingBottom: props.theme.fontSize[props.size] / 2,
    borderRadius: props.theme.radius,
    fontWeight: props.theme.fontWeight.normal,
    fontSize: props.theme.fontSize[props.size],
    display: 'flex',
    alignItems: 'center',

    'svg': {
      fill: color,
      position: 'relative',
      left: -1,
      marginRight: props.theme.space.sm / 2,
      width: props.theme.space[props.size] * 2,
      height: props.theme.space[props.size] * 2,
    },
  };
});

export default Tag;
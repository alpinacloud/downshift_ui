import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { ThemeSchema } from '../../themes/light';

type Props = {
  children: ReactNode;
  size?: keyof ThemeSchema['fontSize'];
  weight?: keyof ThemeSchema['fontWeight'];
  color?: keyof ThemeSchema['color'];
  font?: keyof ThemeSchema['font'];
  style?: CSSProperties;
  className?: string;
}

const Text: FC<Props> = ({
  size = 'md',
  weight = 'normal',
  color = 'text',
  font = 'body',
  children,
  style,
  className,
}) => {
  return (
    <Root size={size} color={color} weight={weight} font={font} style={style} className={className}>
      {children}
    </Root>
  );
}


const Root = styled.p<Pick<Props, 'size' | 'weight' | 'font' | 'color'>>(props => ({
  width: '100%',
  margin: 0,
  color: props.theme.color[props.color],
  fontWeight: props.theme.fontWeight[props.weight],
  fontSize: props.theme.fontSize[props.size],
  fontFamily: props.theme.font[props.font],
}));

export default Text;
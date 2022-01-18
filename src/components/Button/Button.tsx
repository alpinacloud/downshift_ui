import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Spinner from '../Spinner/Spinner';
import { PropsOf } from '@emotion/react';

type Props = PropsOf<'button'> & {
  children: ReactNode;
  btnSize?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'surface' | 'link' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  loading?: boolean;
}

const Button: FC<Props> = ({
  btnSize = 'md',
  variant = 'primary',
  children,
  style,
  className,
  disabled,
  loading,
  ...rest
}) => {
  return (
    <Root
      {...rest}
      variant={variant}
      btnSize={btnSize}
      style={style}
      disabled={loading || disabled}
      className={className}
    >
      {loading ? <Spinner size="sm" color="disabledText" /> : children}
    </Root>
  );
}

const shadowMap = {
  primary: 'ring',
  surface: 'ring',
  link: 'ring',
  success: 'successRing',
  warning: 'warningRing',
  error: 'errorRing',
}

const Root = styled.button<Pick<Props, 'variant' | 'btnSize' | 'disabled'>>((props) => {
  const textColor = props.variant === 'link' ? props.theme.color.primary : props.variant === 'surface' ? props.theme.color.text : props.theme.color[props.variant + 'Text'];

  return {
    backgroundColor: props.variant === 'link' ? 'transparent' : props.theme.color[props.variant],
    filter: props.variant !== 'link' ? `drop-shadow(${props.theme.shadow.sm})` : undefined,
    color: textColor,
    padding: props.theme.space[props.btnSize],
    paddingTop: props.theme.space[props.btnSize] / 1.5,
    paddingBottom: props.theme.space[props.btnSize] / 1.5,
    fontSize: props.theme.fontSize[props.btnSize],
    borderRadius: props.theme.radius,
    fontWeight: props.theme.fontWeight.normal,
    transition: `box-shadow ${props.theme.speed}s, border-color ${props.theme.speed}s, background-color ${props.theme.speed}s, color ${props.theme.speed}s`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${props.variant === 'surface' ? props.theme.color.contrast : props.variant === 'link' ? 'transparent' : props.disabled ? props.theme.color.disabled : props.theme.color[props.variant]}`,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    height: 'max-content',

    'svg': {
      width: props.theme.space[props.btnSize] * 1.75,
      height: props.theme.space[props.btnSize] * 1.75,
      fill: textColor,
      transition: `fill ${props.theme.speed}s`,
    },

    '&:disabled': {
      backgroundColor: props.variant === 'link' ? 'transparent' : props.theme.color.disabled,
      color: props.variant === 'link' ? props.theme.color.disabled : props.theme.color.disabledText,
      opacity: props.theme.disabledOpacity,
    },
    '&:not(:disabled):hover': {
      backgroundColor: props.variant === 'primary' ? props.theme.color.primaryHard : undefined,
    },
    '&:not(:disabled):hover, &:not(:disabled):focus': {
      borderColor: props.variant === 'surface' ? props.theme.color.contrastHard : undefined,
    },
    '&:not(:disabled):focus': {
      boxShadow: shadowMap[props.variant] ? props.theme.shadow[shadowMap[props.variant]](props) : undefined,
    },
    '&:focus-visible': {
      outline: 'none',
    },
  };
});

export default Button;
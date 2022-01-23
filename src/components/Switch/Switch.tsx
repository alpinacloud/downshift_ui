import React, { FC, useRef, CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  value?: boolean;
  onChange?: (value: boolean) => void;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  label?: string | ReactNode;
}

const Switch: FC<Props> = ({
  size = 'md',
  value = false,
  onChange,
  className,
  label,
  style,
  disabled,
}) => {
  const ref = useRef();

  const handleChange = () => {
    if (disabled) return;
    onChange && onChange(!value);
  };

  return (
    <Root
      className={className}
      style={style}
      onClick={handleChange}
      ref={ref}
      disabled={disabled}
    >
      <Shape
        size={size}
        disabled={disabled}
        isChecked={value}
      >
        <StateIndicator size={size} isChecked={value} disabled={disabled} />
      </Shape>

      {label && <Label size={size}>{label}</Label>}
    </Root>
  );
}

const Root = styled.div<Pick<Props, 'disabled'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  opacity: props.disabled ? props.theme.disabledOpacity : undefined,
}));

const Label = styled.span<Pick<Props, 'size'>>(props => ({
  fontSize: props.theme.fontSize[props.size],
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color.text,
  marginLeft: props.theme.space[props.size],
}));

const Shape = styled.button<
  Pick<Props, 'size' | 'disabled'> & {isChecked: boolean}
>(props => {
  const borderColor = props.disabled
    ? props.theme.color.disabled
    : (
      props.isChecked
        ? props.theme.color.primary
        : props.theme.color.contrast
    );

  const backgroundColor = props.isChecked
    ? (
      props.disabled
        ? props.theme.color.disabled
        : props.theme.color.primary
    ) : (
      props.disabled
        ? props.theme.color.disabledText
        : props.theme.color.surface
    );

  const paddingLeft = !props.isChecked
    ? props.theme.space[props.size] / 2.5
    : props.theme.space[props.size] * 1.75

  const paddingRight  = props.isChecked
    ? props.theme.space[props.size] / 2.5
    : props.theme.space[props.size] * 1.75

  return {
    filter: `drop-shadow(${props.theme.shadow.sm})`,
    display: 'flex',
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 1,
    transition: `box-shadow ${props.theme.speed}s,
      border-color ${props.theme.speed}s,
      padding ${props.theme.speed}s,
      background-color ${props.theme.speed}s`,
    borderRadius: props.theme.space[props.size] * 3,
    padding: props.theme.space[props.size] / 2.5,
    pointerEvents: props.disabled ? 'none' : undefined,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    paddingRight,
    paddingLeft,
    borderColor,
    backgroundColor,

    '&:hover, &:focus': {
      borderColor: !props.isChecked ? props.theme.color.contrastHard : undefined,
      backgroundColor: props.isChecked ? props.theme.color.primaryHard : undefined,
    },
    '&:focus': {
      boxShadow: props.theme.shadow.ring(props),
    },
  };
});

const StateIndicator = styled.span<
  Pick<Props, 'size' | 'disabled'> & {isChecked: boolean}
>(props => {
  const backgroundColor = props.isChecked
    ? (
      props.disabled
        ? props.theme.color.disabledText
        : props.theme.color.primaryText
    ) : (
      props.disabled
        ? props.theme.color.disabled
        : props.theme.color.primary
    );

  return {
    display: 'inline-block',
    borderRadius: '100%',
    height: props.theme.space[props.size] * 1.5,
    width: props.theme.space[props.size] * 1.5,
    backgroundColor,
  };
});

export default Switch;
import React, { FC, CSSProperties, useRef, useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import useClickOutside from '../../utils/useOutsideClick';

type Props = {
  value?: boolean;
  style?: CSSProperties;
  inputSize?: 'md' | 'lg';
  label?: string | ReactNode;
  onBlur?: (e: React.FocusEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onChange?: (value: boolean) => void;
  className?: string;
  disabled?: boolean;
}

const Checkbox: FC<Props> = ({
  value = false,
  inputSize = 'md',
  label,
  onChange,
  style,
  disabled,
  className,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setFocused] = useState<boolean>(false);

  const ref = useRef();
  useClickOutside(ref, () => setFocused(false));
  
  const handleChange = () => {
    setFocused(true);
    onChange && onChange(!value);
  };

  return (
    <Container
      onClick={handleChange}
      className={className}
      disabled={disabled}
      style={style}
      ref={ref}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Box isChecked={value} inputSize={inputSize} disabled={disabled} isFocused={isFocused}>
        {value &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        }
      </Box>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

const Container = styled.div<Pick<Props, 'disabled'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  opacity: props.disabled ? 0.8 : undefined,
  pointerEvents: props.disabled ? 'none' : undefined,
}));

const Box = styled.span<Pick<Props, 'inputSize' | 'disabled'> & {isFocused: boolean, isChecked: boolean}>(props => ({
  width: props.inputSize === 'lg' ? 36 : 24,
  height: props.inputSize === 'lg' ? 36 : 24,
  padding: props.inputSize === 'lg' ? 5 : 3,
  border: `1px solid ${props.isChecked ? props.theme.color.primary : props.theme.color.contrast}`,
  backgroundColor: props.disabled
    ? props.theme.color.disabled
    : props.isChecked ? props.theme.color.primary : props.theme.color.surface,
  borderRadius: props.theme.radius,
  cursor: 'pointer',
  display: 'block',
  transition: `background-color ${props.theme.speed}s, border-color ${props.theme.speed}s`,
  flexShrink: 0,

  'svg': {
    pointerEvents: 'none',
  },
  'svg path': {
    color: props.isChecked ? props.theme.color.primaryText : 'transparent',
  },

  '&:not(:disabled):hover, &:not(:disabled):focus': {
    borderColor: props.isChecked ? props.theme.color.primary : props.theme.color.contrastHard,
  },
  '&:not(:disabled):hover': {
    backgroundColor: props.isChecked ? props.theme.color.primaryHard : undefined,
  },
}));

const Label = styled.span<{}>(props => ({
  display: 'inline-block',
  fontSize: props.theme.fontSize.md,
  margin: '0 0 0 8px',
  color: props.theme.color.text,
  textAlign: 'left',

}));

export default Checkbox;
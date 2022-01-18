import React, { HTMLProps, FC } from 'react';
import styled from '@emotion/styled';

type Props = Omit<HTMLProps<HTMLTextAreaElement>, 'as' | 'type'> & {
  inputSize: 'sm' | 'md' | 'lg';
}

const Textarea: FC<Props> = ({ inputSize, ...rest }) => {
  return (
    <Root
      {...rest}
      inputSize={inputSize}
    />
  );
}


const Root = styled.textarea<Pick<Props, 'inputSize'>>((props) => ({
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  backgroundColor: props.theme.color.surface,
  borderRadius: props.theme.radius,
  border: `1px solid ${props.theme.color.contrast}`,
  filter: `drop-shadow(${props.theme.shadow.sm})`,
  fontSize: props.theme.fontSize[props.inputSize],
  padding: props.theme.space.md,
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color.text,
  resize: props.disabled ? 'none' : undefined,

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: props.theme.disabledOpacity,
  },
  '&:not(:disabled):hover, &:not(:disabled):focus': {
    borderColor: props.theme.color.contrastHard,
  },
  '&:not(:disabled):focus': {
    boxShadow: props.theme.shadow.ring(props),
  },
}));

export default Textarea;
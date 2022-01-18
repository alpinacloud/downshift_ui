import React, { FC } from 'react';
import styled from '@emotion/styled';
import { PropsOf } from '@emotion/react';

type Props = PropsOf<'input'> & {
  inputSize?: 'sm' | 'md' | 'lg';
  capsule?: boolean;
  error?: string;
}

const Input: FC<Props> = ({
  inputSize = 'md',
  capsule,
  error,
  ...rest
}) => {
  return (
    <Root>
      <StyledInput
        {...rest}
        capsule={capsule}
        inputSize={inputSize}
      />
      {error && <ErrorText inputSize={inputSize}>{error}</ErrorText>}
    </Root>
  );
}

const Root = styled.div(() => ({
  width: '100%',
}));

const ErrorText = styled.span<Pick<Props, 'inputSize'>>(props => ({
  color: props.theme.color.error,
  fontWeight: props.theme.fontWeight.normal,
  fontSize: props.theme.fontSize[props.inputSize] * 0.9,
  marginTop: props.theme.space.sm,
  marginBottom: props.theme.space.sm,
  display: 'block',
  width: '100%',
}));

const StyledInput = styled.input<Pick<Props, 'inputSize' | 'capsule'>>((props) => ({
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  backgroundColor: props.theme.color.surface,
  borderRadius: props.capsule ? 9999 : props.theme.radius,
  border: `1px solid ${props.theme.color.contrast}`,
  filter: `drop-shadow(${props.theme.shadow.sm})`,
  fontSize: props.theme.fontSize[props.inputSize],
  padding: props.theme.space[props.inputSize] * 1.5,
  paddingTop: props.theme.space[props.inputSize],
  paddingBottom: props.theme.space[props.inputSize],
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color.text,
  transition: `box-shadow ${props.theme.speed}s, border-color ${props.theme.speed}s`,
  width: '100%',

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

export default Input;
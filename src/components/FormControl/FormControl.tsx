import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { PropsOf } from '@emotion/react';

type Props = PropsOf<'div'> & {
  error?: string;
  children: ReactNode;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const FormControl: FC<Props> = ({ label, error, children, size = 'md', ...rest }) => {
  return (
    <Container {...rest}>
      {label && <Label size={size}>{label}</Label>}
      {children}
      {error && <ErrorText size={size}>{error}</ErrorText>}
    </Container>
  );
}

const Container = styled.div(props => ({
  margin: `${props.theme.space.md}px 0`,

  '&:first-of-type': {
    marginTop: 0,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
}));

const Label = styled.span<Pick<Props, 'size'>>(props => ({
  color: props.theme.color.text,
  fontWeight: props.theme.fontWeight.heavy,
  fontSize: props.theme.fontSize[props.size],
  display: 'block',
  marginBottom: props.theme.space.sm / 2,
  width: '100%',
}));

const ErrorText = styled.div<Pick<Props, 'size'>>(props => ({
  color: props.theme.color.error,
  fontWeight: props.theme.fontWeight.normal,
  fontSize: props.theme.fontSize[props.size],
  marginTop: props.theme.space.sm,
  marginBottom: props.theme.space.sm,
  display: 'block',
  width: '100%',
}));

export default FormControl;
import React, { HTMLProps, FC } from 'react';
import styled from '@emotion/styled';

type Props = Omit<HTMLProps<HTMLSelectElement>, 'as' | 'type'> & {
  selectSize?: 'sm' | 'md' | 'lg';
}

const Select: FC<Props> = ({
  selectSize = 'md',
  ...rest
}) => {
  return (
    <Wrapper selectSize={selectSize}>
      <Root
        {...rest}
        selectSize={selectSize}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g>
          <rect width="24" height="24" opacity="0"/>
          <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/>
        </g>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, 'selectSize'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  'svg': {
    position: 'absolute',
    right: props.theme.space[props.selectSize],
    zIndex: 1,
    height: 20,
    width: 20,
    fill: props.theme.color.text,
    pointerEvents: 'none',
  },
}));

const Root = styled.select<Pick<Props, 'selectSize'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  backgroundColor: props.theme.color.surface,
  borderRadius: props.theme.radius,
  border: `1px solid ${props.theme.color.contrast}`,
  filter: `drop-shadow(${props.theme.shadow.sm})`,
  padding: props.theme.space[props.selectSize],
  paddingRight: props.theme.space[props.selectSize] + 24,
  fontSize: props.theme.fontSize[props.selectSize],
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color.text,
  cursor: 'pointer',
  appearance: 'none',
  width: '100%',
  transition: `box-shadow ${props.theme.speed}s, border-color ${props.theme.speed}s`,

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

export default Select;
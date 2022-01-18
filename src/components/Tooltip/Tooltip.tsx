import React, { FC, ReactNode } from 'react';
import Popover, { Props as PopoverProps } from '../Popover/Popover';
import styled from '@emotion/styled';

type Props = Omit<PopoverProps, 'overlay'> & {
  text: string | number | ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const Tooltip: FC<Props> = ({
  placement = 'top',
  trigger = 'hover',
  size = 'sm',
  children,
  text,
  ...rest
}) => {
  return (
    <Popover
      trigger={trigger}
      placement={placement}
      overlay={(
        <Overlay size={size}>
          {text}
        </Overlay>
      )}
      {...rest}
    >
      {children}
    </Popover>
  );
}

const Overlay = styled.div<Pick<Props, 'size'>>((props) => ({
  width: '100%',
  color: props.theme.color.text,
  fontWeight: props.theme.fontWeight.normal,
  fontSize: props.theme.fontSize[props.size],
  padding: props.theme.space[props.size],
  backgroundColor: props.theme.color.surface,
  borderRadius: props.theme.radius,
  boxShadow: props.theme.shadow.sm,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: props.theme.color.contrast,
}));

export default Tooltip;
import React, { FC } from 'react';
import Popover, { Props as PopoverProps } from '../Popover/Popover';
import Menu, { Props as MenuProps } from '../Menu/Menu';

export type Props = MenuProps & {
  popoverProps?: Omit<PopoverProps, 'overlay' | 'children'>;
};

const Dropdown: FC<Props> = ({
  children,
  size = 'md',
  popoverProps,
  ...rest
}) => {
  return (
    <Popover
      {...popoverProps}
      overlay={(
        <Menu
          size={size}
          {...rest}
        />
      )}
    >
      {children}
    </Popover>
  );
};

export default Dropdown;
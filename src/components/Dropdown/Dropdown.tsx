import React, { FC } from 'react';
import Popover, { Props as PopoverProps } from '../Popover/Popover';
import Menu, { Props as MenuProps } from '../Menu/Menu';

type Props = MenuProps & {
  popoverProps?: Omit<PopoverProps, 'overlay' | 'children'>;
};

const Dropdown: FC<Props> = ({ children, items, size, onClick, popoverProps }) => {
  return (
    <Popover
      {...popoverProps}
      overlay={(
        <Menu
          items={items}
          size={size}
          onClick={onClick}
        />
      )}
    >
      {children}
    </Popover>
  );
};

export default Dropdown;
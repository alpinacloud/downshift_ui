import React, { CSSProperties, FC, ReactNode, Fragment } from 'react';
import styled from '@emotion/styled';
import Select from '../Select/Select';
import { ChevronDown } from '../../static/icons';
import Input from '../Input/Input';
import Popover from '../Popover/Popover';
import Menu from '../Menu/Menu';
import type { Props as MenuProps, MenuItem } from '../Menu/Menu';
import type { Props as PopoverProps, ForwardRefType } from '../Popover/Popover';

type Props = Omit<MenuProps, 'onClick' | 'activeId'> & {
  style?: CSSProperties;
  onChange?: (item: MenuItem) => void;
  value?: MenuItem['id'];
  search?: string;
  onSearchChange?: (query: string) => void;
  searchFilter?: (item: MenuItem) => void;
  texts?: {
    searchPlaceholder: string;
    placeholder: string;
  },
  popoverProps?: Omit<PopoverProps, 'overlay' | 'children'>;
}

const Autocomplete: FC<Props> = ({
  size = 'md',
  texts = {
    searchPlaceholder: 'Search...',
    placeholder: 'Select...',
  },
  popoverProps = {},
  items,
  onChange,
  onSearchChange,
  search,
  style,
  value,
  searchFilter,
  ...rest
}) => {
  const popoverRef = React.useRef<ForwardRefType>();

  const onSelect = (value: MenuItem) => {
    popoverRef.current.forceClose();
    onChange(value);
  }

  const selectLabel = React.useMemo(() => {
    if (value) {
      return items.find(i => i.id === value)?.label;
    }

    return texts.placeholder;
  }, [items, value]);

  const filteredItems = React.useMemo(() =>
    items.filter(searchFilter)
  , [searchFilter]);

  return (
    <Popover
      trigger="click"
      ref={popoverRef}
      placement={popoverProps.placement || 'bottom-start'}
      style={{
        ...popoverProps.style,
        width: '100%',
      }}
      overlay={(
        <>
          {onSearchChange &&
            <SearchInput
              placeholder={texts.searchPlaceholder}
              value={search}
              inputSize={size}
              onChange={e => onSearchChange(e.target.value)}
            />
          }

          <Menu
            items={filteredItems}
            size={size}
            onClick={onSelect}
            activeId={value}
            style={{
              ...style,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            {...rest}
          />
        </>
      )}
    >
      <Root size={size}>
        {selectLabel}
        {ChevronDown}
      </Root>
    </Popover>
  );
}

const Root = styled.button<Pick<Props, 'size'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  backgroundColor: props.theme.color.surface,
  borderRadius: props.theme.radius,
  border: `1px solid ${props.theme.color.contrast}`,
  filter: `drop-shadow(${props.theme.shadow.sm})`,
  padding: props.theme.space[props.size],
  paddingRight: props.theme.space[props.size] + props.theme.space[props.size] * 2,
  fontSize: props.theme.fontSize[props.size],
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

  svg: {
    fill: props.theme.color.text,
    position: 'absolute',
    right: props.theme.space[props.size] * 0.8,
    zIndex: 1,
    height: props.theme.space[props.size] * 1.6,
    width: props.theme.space[props.size] * 1.6,
  },
}));

const SearchInput = styled(Input)(props => ({
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottom: 0,
}));

export default Autocomplete;
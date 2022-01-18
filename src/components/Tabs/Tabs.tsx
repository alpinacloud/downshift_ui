import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';

type Tab = {
  id: string | number;
  label: string;
  disabled?: boolean;
}

type Props = {
  tabs: Tab[];
  onChange?: (tab: Tab) => void,
  value?: string | number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'border' | 'background';
  style?: CSSProperties;
  className?: string;
  shape?: 'rect' | 'capsule',
}

const Tabs: FC<Props> = ({
  size = 'md',
  variant = 'border',
  shape = 'rect',
  children,
  style,
  className,
  tabs,
  value,
  onChange,
  ...rest
}) => {
  const onSelect = (tab: Tab) => () => onChange && onChange(tab);

  return (
    <Root
      {...rest}
      variant={variant}
      style={style}
      className={className}
    >
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          size={size}
          shape={shape}
          variant={variant}
          disabled={tab.disabled}
          isActive={value === tab.id}
          onClick={onSelect(tab)}
        >
          {tab.label}
        </Tab>
      ))}
    </Root>
  );
}


const Root = styled.div<Pick<Props, 'variant'>>((props) => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: props.variant === 'border' ? `2px solid ${props.theme.color.contrast}` : undefined,
  width: '100%',
}));

const Tab = styled.button<Pick<Tab, 'disabled'> & Pick<Props, 'variant' | 'size' | 'shape'> & { isActive: boolean }>`
  ${props => `
    background-color: transparent;
    padding: ${props.theme.space[props.size]}px;
    margin: ${props.theme.space[props.size]}px;
    font-size: ${props.theme.fontSize[props.size]};
    font-weight: ${props.theme.fontWeight.normal};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    border: 0;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    opacity: ${props.disabled ? 0.65 : undefined};
    pointer-events: ${props.disabled ? 'none' : undefined};

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    ${props.variant === 'background' && `
      background-color: ${props.isActive ? props.theme.color.primary : 'transparent'};
      transition: background-color ${props.theme.speed}s, color ${props.theme.speed}s;
      color: ${props.isActive ? props.theme.color.primaryText : props.theme.color.text};
      margin-left: ${props.theme.space[props.size] / 3}px;
      margin-right: ${props.theme.space[props.size] / 3}px;
      padding-top: ${props.theme.space[props.size] / 2}px;
      padding-bottom: ${props.theme.space[props.size] / 2}px;
      border-radius: ${props.shape === 'rect' ? props.theme.radius : 99999}px;
      &:hover {
        color: ${props.isActive ? undefined : props.theme.color.heading};
        background-color: ${!props.isActive ? props.theme.color.contrast : undefined};
      }
    `};

    ${props.variant === 'border' && `
      transition: color ${props.theme.speed}s, border-color ${props.theme.speed}s;
      border-bottom: 2px solid ${props.isActive ? props.theme.color.primary : 'transparent'};
      color: ${props.isActive ? props.theme.color.primary : props.theme.color.text};
      padding-left: 0;
      padding-right: 0;
      padding-bottom: ${props.theme.space[props.size] / 1.5}px;
      bottom: -2px;
      &:hover {
        color: ${props.isActive ? undefined : props.theme.color.heading};
      }
    `};

    
  `}
`;

export default Tabs;
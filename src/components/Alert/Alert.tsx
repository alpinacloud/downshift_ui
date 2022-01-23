import React, { FC, ReactNode, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { ErrorIcon, SuccessIcon, WarningIcon } from '../../static/icons';

type Props = {
  variant?: 'primary' | 'surface' | 'error' | 'warning' | 'success';
  className?: string;
  style?: CSSProperties;
  title?: string;
  description?: string;
  aside?: ReactNode;
  children?: ReactNode;
  customIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  accent?: 'top-border' | 'left-border' | 'border';
}

const iconMap = {
  error: ErrorIcon,
  warning: WarningIcon,
  success: SuccessIcon,
};

const Alert: FC<Props> = ({
  variant = 'surface',
  size = 'md',
  accent = 'top-border',
  title,
  description,
  style,
  className,
  aside,
  children,
  customIcon,
}) => {
  const targetIcon = ['error', 'warning', 'success'].includes(variant) ? iconMap[variant] : undefined

  return (
    <Root
      variant={variant}
      style={style}
      className={className}
      size={size}
      accent={accent}
    >
      {children || (
        <>
          <IconWithInfo>
            {customIcon || targetIcon}
            <Info>
              {title && <Title size={size} variant={variant}>{title}</Title>}
              {description && <Desc size={size} variant={variant}>{description}</Desc>}
            </Info>
          </IconWithInfo>
          {aside && <Aside size={size}>{aside}</Aside>}
        </>
      )}
    </Root>
  );
}

const Root = styled.div<Pick<Props, 'variant' | 'size' | 'accent'>>((props) => {
  const borderColor = props.variant === 'surface'
    ? props.theme.color.contrast
    : props.theme.color[props.variant + 'Text'];

  const backgroundColor = props.variant === 'surface'
    ? props.theme.color.surface
    : props.theme.color[props.variant];
  
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: backgroundColor,
    boxShadow: props.theme.shadow.sm,
    padding: props.theme.space[props.size],
    borderLeft: props.accent === 'left-border'
      ? `${props.theme.space[props.size] / 3}px solid ${borderColor}`
      : 0,
    borderTop: props.accent === 'top-border'
      ? `${props.theme.space[props.size] / 3}px solid ${borderColor}`
      : 0,
    border: props.accent === 'border' ? `2px solid ${borderColor}` : undefined,
    borderRadius: props.theme.radius,
  
    'svg': {
      width: 24,
      height: 24,
      position: 'relative',
      left: -2,
      fill: props.theme.color[props.variant + 'Text'],
      marginRight: props.theme.space[props.size] / 2,
      flexShrink: 0,
    }
  };
});

const Info = styled.div(() => ({
  display: 'block',
}));

const Title = styled.span<Pick<Props, 'size' | 'variant'>>(props => ({
  display: 'block',
  fontSize: props.theme.fontSize[props.size],
  fontWeight: props.theme.fontWeight.heavy,
  color: props.theme.color[`${props.variant}Text`],
}));

const Desc = styled.span<Pick<Props, 'size' | 'variant'>>(props => ({
  display: 'block',
  fontSize: props.theme.fontSize[props.size],
  fontWeight: props.theme.fontWeight.normal,
  color: props.theme.color[`${props.variant}Text`],
  opacity: 0.85,
}));

const IconWithInfo = styled.div(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

const Aside = styled.div<Pick<Props, | 'size'>>(props => ({
  marginLeft: props.theme.space[props.size],
}));

export default Alert;
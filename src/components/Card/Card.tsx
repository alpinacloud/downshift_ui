import React, { ReactNode, HTMLProps, CSSProperties } from 'react';
import styled from '@emotion/styled';
import Spinner from '../Spinner/Spinner';

export type Props = Omit<HTMLProps<HTMLDivElement>, | 'as' | 'type'> & {
  title?: string | ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
  description?: string | ReactNode;
  count?: number;
  children?: ReactNode | string;
  aside?: ReactNode;
  icon?: ReactNode;
  iconSize?: number;
  loading?: boolean;
  cardHeaderStyles?: CSSProperties;
};

const Card: React.FC<Props> = ({
  spacing = 'md',
  title,
  description,
  count,
  children,
  aside,
  loading,
  icon,
  iconSize,
  cardHeaderStyles,
  ...rest
}) => {
  return (
    <CardContainer {...rest}>
      {(title || description) && (
        <CardHeader spacing={spacing} style={cardHeaderStyles}>
          <HeaderWrapper iconSize={iconSize}>
            {icon}

            <TitleAndDescription>
              <div>
                {title && <Title>{title}</Title>}
                {typeof count === 'number' && <Counter spacing={spacing}>{count}</Counter>}
              </div>

              <Description>{description}</Description>
            </TitleAndDescription>
          </HeaderWrapper>

          {aside && <Aside spacing={spacing}>{aside}</Aside>}
        </CardHeader>
      )}

      {loading ? (
        <CardContent loading>
          <Spinner size={spacing} />
        </CardContent>
      ) : children}
    </CardContainer>
  );
};

export const CardContent = styled.div<
  Pick<Props, 'loading' | 'spacing'> & {contrast?: boolean}
>(props => ({
  backgroundColor: props.contrast
    ? props.theme.color.surfaceContrast
    : props.theme.color.surface,
  borderTop: `1px solid ${props.theme.color.contrast}`,
  borderBottom: `1px solid ${props.theme.color.contrast}`,
  color: props.theme.color.text,
  fontWeight: props.theme.fontWeight.normal,
  padding: props.loading
    ? props.theme.space[props.spacing] * 2
    : props.theme.space[props.spacing],
  textAlign: props.loading ? 'center' : undefined,

  '&:not(:first-of-type)': {
    borderBottom: 0,
  },

  '&:last-of-type': {
    borderBottom: 0,
  },
}));

export const CardContainer = styled.div<Pick<Props, | 'spacing' | 'loading'>>(props => ({
  backgroundColor: props.theme.color.surface,
  boxShadow: props.theme.shadow.sm,
  borderRadius: props.theme.radius,
  color: props.theme.color.text,
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
}));

const CardHeader = styled.div<Pick<Props, | 'spacing'>>(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: props.theme.space[props.spacing],
  padding: props.theme.space[props.spacing],
  paddingBottom: 0,
}));

const HeaderWrapper = styled.div<Pick<Props, | 'iconSize'>>(props => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  'svg': {
    width: props.iconSize || 24,
    height: props.iconSize || 24,
    marginRight: props.theme.space.sm,
    fill: props.theme.color.primary,
  }
}));

const TitleAndDescription = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Counter = styled.span<Pick<Props, | 'spacing'>>(props => ({
  fontSize: props.theme.fontSize.sm,
  fontWeight: props.theme.fontWeight.heavy,
  borderRadius: props.theme.radius,
  backgroundColor: props.theme.color.primary,
  color: props.theme.color.primaryText,
  display: 'inline-block',
  height: 20,
  width: 'auto',
  paddingLeft: props.theme.space.sm,
  paddingRight: props.theme.space.sm,
  lineHeight: '20px',
  textAlign: 'center',
  marginLeft: props.theme.space.sm,
}));

const Title = styled.span(props => ({
  margin: 0,
  fontWeight: props.theme.fontWeight.heavy,
  color: props.theme.color.heading,
  display: 'inline-block',
  fontSize: props.theme.fontSize.lg,
}));

const Description = styled.span(props => ({
  margin: 0,
  fontWeight: props.theme.fontWeight.normal,
  fontSize: props.theme.fontSize.sm,
  color: props.theme.color.text,
  display: 'block',
}));

const Aside = styled.div<Pick<Props, | 'spacing'>>(props => ({
  marginLeft: props.theme.space[props.spacing],
}));

export default Card;

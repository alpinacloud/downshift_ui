import React, { FC, ReactNode, HTMLProps, useEffect, useRef, Fragment, useState, CSSProperties } from 'react';
import styled from '@emotion/styled';
import {useTheme} from '@emotion/react';
import Card, { CardContent, Props as CardProps } from '../Card/Card';
import useOutsideClick from '../../utils/useOutsideClick';
import { fadeOut, scaleOut, fadeIn, scaleIn } from '../../static/keyframes';
import Button from '../Button/Button';
import { CloseCircle } from '../../static/icons';

type Props = Omit<HTMLProps<HTMLTableElement>, 'as' | 'type'> & {
  children?: ReactNode;
  cardProps?: Omit<CardProps, 'children'>,
  footer?: ReactNode;
  isOpen?: boolean;
  width?: number | string;
  height?: number | string;
  blockBodyScroll?: boolean;
  cardContentStyles?: CSSProperties;
  pullUp?: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = ({
  width = '35vw',
  height = 'auto',
  isOpen = false,
  footer,
  cardProps,
  children,
  blockBodyScroll,
  pullUp,
  cardContentStyles,
  onClose,
  ...rest
}) => {
  const theme = useTheme();

  const [localOpen, setLocalOpen] = useState<boolean>(isOpen);
  const [closing, setClosing] = useState<boolean>(false);
  const ref = useRef();

  const triggerClose = () => {
    if (onClose) {
      setClosing(true);

      return setTimeout(() => {
        setClosing(false);
        setLocalOpen(false);
        onClose();
      }, theme.speed * 1000);
    }

    return null;
  }

  useOutsideClick(ref, () => localOpen && triggerClose());

  useEffect(() => {
    if (blockBodyScroll) {
      document.body.setAttribute('style', 'overflow: hidden');
    }

    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  useEffect(() => {
    let t = null;

    if (localOpen === true && isOpen === false && !closing) {
      t = triggerClose();
    } else {
      setLocalOpen(isOpen);
    }

    return () => {
      clearTimeout(t);
    }
  }, [isOpen]);

  if (!localOpen) {
    return <Fragment />;
  }

  return (
    <Root {...rest}>
      <ModalBackground isClosing={closing} />

      <ContentContainer isClosing={closing}>
        <div ref={ref}>
          {!cardProps ? children :
            <Card
              aside={onClose && (
                <CloseButton type="button" btnSize="md" variant="link" onClick={triggerClose}>
                  {CloseCircle}
                </CloseButton>
              )}
              {...cardProps}
              style={{
                width,
                height,
                transform: pullUp ? 'translateY(-50%)' : undefined,
                ...cardProps.style,
              }}
            >
              <CardContent contrast spacing={cardProps.spacing} style={cardContentStyles}>
                {children}
              </CardContent>
              {footer && <CardContent spacing={cardProps.spacing}>{footer}</CardContent>}
            </Card>
          }
        </div>
      </ContentContainer>
    </Root>
  );
}

const Root = styled.div``;

const ModalBackground = styled.div<{isClosing: boolean}>(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: props.theme.color.overlayBackground,
  zIndex: 1000,
  animation: `${props.isClosing ? fadeOut : fadeIn} ${props.theme.speed}s`,
}));

const ContentContainer = styled.div<{isClosing: boolean}>(props => ({
  zIndex: 1150,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${props.isClosing ? scaleOut : scaleIn} ${props.theme.speed}s`,
}));

const CloseButton = styled(Button)(props => ({
  padding: props.theme.space.sm,
  paddingBottom: props.theme.space.sm / 2,
  paddingTop: props.theme.space.sm / 2,

  'svg': {
    fill: props.theme.color.contrast,
  },

  '&:hover svg': {
    fill: props.theme.color.primary,
  }
}));

export default Modal;
import React, { CSSProperties, FC, ReactNode, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import useDisclosure from '../../utils/useDisclosure';
import useOutsideClick from '../../utils/useOutsideClick';

export type Props = {
  overlay: ReactNode;
  children: ReactNode;
  placement?: 
      'top' 
    | 'left' 
    | 'bottom' 
    | 'right' 
    | 'top-start' 
    | 'top-end' 
    | 'bottom-start' 
    | 'bottom-end';
  style?: CSSProperties;
  overlayStyles?: CSSProperties;
  trigger?: 'click' | 'hover';
  className?: string;
}

const Popover: FC<Props> = ({
  trigger = 'click',
  placement = 'bottom',
  overlayStyles,
  style,
  className,
  children,
  overlay,
}) => {
  const theme = useTheme();
  const {onClose, onOpen, onToggle, isOpen} = useDisclosure();

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const mouseOverOverlayRef = useRef(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [{
      name: 'offset',
      enabled: true,
      options: {
        offset: [0, theme.space.sm],
      }
    }]
  });

  const handleClose = () => {
    mouseOverOverlayRef.current = false;
    onClose();
  };

  useOutsideClick({current: popperElement}, () => handleClose(), [{current: referenceElement}]);

  const onRefMouseLeave = trigger !== 'hover' ? undefined : () =>
    setTimeout(() => {
      !mouseOverOverlayRef.current && handleClose();
    }, 250);

  const handleEffect = (kind: Props['trigger'], useToggle?: boolean) => () => {
    if (trigger !== kind) {
      return;
    }

    useToggle ? onToggle() : onOpen();
  };

  const preventOverlayClickHandlers = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <>
      <Overlay
        ref={setPopperElement}
        isVisible={isOpen}
        onClick={preventOverlayClickHandlers}
        onMouseEnter={() => mouseOverOverlayRef.current = true}
        onMouseLeave={trigger !== 'hover' ? undefined : handleClose}
        style={{
          ...styles.popper,
          ...overlayStyles,
        }}
        {...attributes.popper}
      >
        {overlay}
      </Overlay>

      <Ref
        ref={setReferenceElement}
        style={style}
        className={className}
        onMouseLeave={onRefMouseLeave}
        onMouseEnter={handleEffect('hover')}
        onClick={handleEffect('click', true)}
      >
        {children}
      </Ref>
    </>
  );
}

const Ref = styled.div(() => ({
  display: 'inline-block',
}));

const Overlay = styled.div<{isVisible: boolean}>(props => ({
  visibility: props.isVisible ? undefined : 'hidden',
  opacity: props.isVisible ? 1 : 0,
  transition: `opacity ${props.theme.speed}s`,
  zIndex: 9999,
}));

export default Popover;
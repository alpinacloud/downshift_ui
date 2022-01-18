import React, { CSSProperties, FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { PropsOf } from '@emotion/react';
import Spinner from '../Spinner/Spinner';

type Props = PropsOf<'img'> & {
  imageStyles?: Omit<CSSProperties, 'width' | 'height'>;
  height?: CSSProperties['width'];
  width?: CSSProperties['height'];
}

const Hotkey: FC<Props> = ({
  width = '100%',
  height = '100%',
  style,
  imageStyles,
  ...rest
}) => {
  const [ready, setReady] = useState<boolean>(false);

  const onLoad = () => setReady(true);

  return (
    <Root
      style={{
        ...style,
        height,
        width,
      }}
      onLoad={onLoad}
      isReady={ready}
    >
      {!ready &&
        <SpinnerPositioner>
          <Spinner size="sm" />
        </SpinnerPositioner>
      }
      <Img
        {...rest}
        style={imageStyles}
        isReady={ready}
      />
    </Root>
  );
}

const Root = styled.div<{isReady: boolean}>(props => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: props.theme.color.surface,
  border: props.isReady ? undefined : `1px solid ${props.theme.color.contrast}`,
  borderRadius: props.theme.radius,
}));

const Img = styled.img<{isReady: boolean}>(props => ({
  opacity: props.isReady ? 1 : 0,
  transition: `opacity ${props.theme.speed}s`,
  width: 'inherit',
  height: 'inherit',
  objectFit: 'cover',
}));

const SpinnerPositioner = styled.div(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export default Hotkey;
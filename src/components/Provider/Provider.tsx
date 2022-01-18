import React, { ReactNode, FC } from 'react';
import { css, Global, ThemeProvider } from '@emotion/react';
import { ThemeSchema } from '../../themes/light';
import ToastRenderer from '../ToastRenderer/ToastRenderer';

type Props = {
  theme: ThemeSchema;
  children: ReactNode;
  toastDefaultDuration?: number;
}

const Provider: FC<Props> = ({ theme, children, toastDefaultDuration }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            font-family: ${theme.font.body};
            box-sizing: border-box;
          }

          .downshift-toast {
            display: flex;
            align-items: center;

            svg {
              width: ${theme.space.md * 2}px;
              height: ${theme.space.md * 2}px;
            }

            .downshift-toast-success svg {
              fill: ${theme.color.successText};
            }

            .downshift-toast-loading {
              div:first-of-type div {
                width: ${theme.space.md * 2}px;
                height: ${theme.space.md * 2}px;
              }

              svg {
                fill: ${theme.color.primaryText};
              }
            }

            .downshift-toast-error svg {
              fill: ${theme.color.errorText};
            }

            [role="status"] {
              margin: 0;
              margin-left: ${theme.space.sm}px;
              font: ${theme.font.body};
              font-size: ${theme.fontSize.md}px;
              font-weight: ${theme.fontWeight.normal};
            }
          }
        `}
      />

      {children}

      <ToastRenderer defaultDuration={toastDefaultDuration} />
    </ThemeProvider>
  );
}

export default Provider;
import React, { FC } from 'react';
import { useTheme } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

type Props = {
  defaultDuration?: number;
}

const ToastRenderer: FC<Props> = ({ defaultDuration = 5000 }) => {
  const theme = useTheme();

  return (
    <Toaster
      position="top-center"
      gutter={theme.space.md}
      reverseOrder={false}
      containerClassName="downshift-toast"
      toastOptions={{
        duration: defaultDuration,
        style: {
          background: theme.color.surface,
          color: theme.color.text,
          borderRadius: theme.radius,
          boxShadow: theme.shadow.md,
          padding: theme.space.md,
          paddingTop: theme.space.md,
          paddingBottom: theme.space.sm,
        },
        success: {
          className: 'downshift-toast-success',
          iconTheme: {
            primary: theme.color.successText,
            secondary: theme.color.success,
          },
          style: {
            background: theme.color.success,
            color: theme.color.successText,
          },
        },
        loading: {
          className: 'downshift-toast-loading',
          iconTheme: {
            primary: theme.color.primary,
            secondary: theme.color.surfaceContrast,
          },
          style: {
            background: theme.color.surface,
            color: theme.color.text,
          },
        },
        error: {
          className: 'downshift-toast-error',
          iconTheme: {
            primary: theme.color.errorText,
            secondary: theme.color.error,
          },
          style: {
            background: theme.color.error,
            color: theme.color.errorText,
          },
        },
      }}
    />
  );
}

export default ToastRenderer;
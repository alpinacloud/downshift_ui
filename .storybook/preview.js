import React from 'react';
import { themes } from '@storybook/theming';

import light from '../src/themes/light';
import Provider from '../src/components/Provider/Provider';

const withThemeProvider = (Story, context) => {
  return (
    <Provider theme={light}>
      <Story {...context} />
    </Provider>
  )
}

export const parameters = {
  layout: 'centered',
  panelPosition: 'bottom',
  backgrounds: {
    default: 'for-light',
    values: [
      {
        name: 'for-light',
        value: '#f1f5f9',
      },
      {
        name: 'for-dark',
        value: '#3b5998',
      },
    ],
  },
  docs: {
    theme: themes.light,
  },
};

export const decorators = [withThemeProvider];
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import objectFitImages from 'object-fit-images'
import '@solana/wallet-adapter-react-ui/styles.css';
import 'aos/dist/aos.css';

import 'styles/index.scss';

import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';

import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from 'store/configureStore';
import { appTheme } from '../src/styles/appTheme';
import { themes } from '../src/styles/themes';

const appThemeStyles = appTheme(themes['lux']);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const StoryProviders = ({ children }) => {
  objectFitImages();
  return (
    <MemoryRouter>
      <ReduxProvider store={reduxStore}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </ReduxProvider>
    </MemoryRouter>
  );
};

export const decorators = [
  Story => (
    <StoryProviders>
      <style>{appThemeStyles}</style>
      <Story />
    </StoryProviders>
  ),
];

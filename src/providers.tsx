import React, { FC } from 'react';

import reduxStore from 'store/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';

import { ConfettiProvider } from 'app/components/Confetti';
import { LoaderProvider } from 'contexts/loaderContext';

import { ThemeProvider } from 'contexts/themeContext';

export const Providers: FC = ({ children }) => {
  return (
    <ReduxProvider store={reduxStore}>
      <ConnectedRouter history={history}>
        <LoaderProvider>
          <ConfettiProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ConfettiProvider>
        </LoaderProvider>
      </ConnectedRouter>
    </ReduxProvider>
  );
};

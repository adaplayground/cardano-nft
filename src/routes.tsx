import { Route } from 'react-router-dom';
import { Providers } from 'providers';

import MainLayout from 'app/layouts/MainLayout';

import { HomeView } from 'app/views/HomeView/Loadable';

import { ContactUsView } from 'app/views/ContactUsView/Loadable';

import HomeLayout from 'app/layouts/HomeLayout';

export function Routes() {
  return (
    <Providers>
      <Route
        path="/contact"
        component={() => (
          <MainLayout>
            <ContactUsView/>
          </MainLayout>
        )}
      />

      <Route
        path="/home"
        component={() => (
          <HomeLayout>
            <HomeView/>
          </HomeLayout>
        )}
      />

      <Route
        exact={true}
        path="/"
        component={() => (
          <HomeLayout>
            <HomeView/>
          </HomeLayout>
        )}
      />
    </Providers>
  );
}

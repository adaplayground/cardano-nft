import { Route } from 'react-router-dom';
import { Providers } from 'providers';
import { MarketView } from 'app/views/MarketView';
import MainLayout from 'app/layouts/MainLayout';
import { WalletView } from 'app/views/WalletView/Loadable';
import { FaqView } from 'app/views/FaqView/Loadable';
import { HomeView } from 'app/views/HomeView/Loadable';
import { DiyView } from 'app/views/DiyView/Loadable';
import { SelfMintView } from 'app/views/SelfMintView/Loadable';
import { ContactUsView } from 'app/views/ContactUsView/Loadable';
import { GalleryView } from 'app/views/GalleryView/Loadable';
import { BlogView } from 'app/views/BlogView/Loadable';
import { AdminView } from 'app/views/AdminView/Loadable';
import { AboutMeView } from 'app/views/AboutMeView/Loadable';
import { TutorialView } from 'app/views/TutorialView/Loadable';
import { CoinView } from 'app/views/CoinView/Loadable';
import { SolanaClusterProvider } from 'metaplex/contexts/solanaClusterContext';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import HomeLayout from 'app/layouts/HomeLayout';

export function Routes() {
  return (
    <SolanaClusterProvider initValue={WalletAdapterNetwork.Mainnet}>
      <Providers>
        <Route
          path="/about"
          component={() => (
            <MainLayout>
              <AboutMeView />
            </MainLayout>
          )}
        />
        <Route
          path="/wallet"
          component={() => (
            <MainLayout>
              <WalletView />
            </MainLayout>
          )}
        />
        <Route
          path="/faq"
          component={() => (
            <MainLayout>
              <FaqView />
            </MainLayout>
          )}
        />
        <Route
          path="/diy"
          component={() => (
            <MainLayout>
              <DiyView />
            </MainLayout>
          )}
        />
        <Route
          path="/self"
          component={() => (
            <MainLayout>
              <SelfMintView />
            </MainLayout>
          )}
        />
        <Route
          path="/contact"
          component={() => (
            <MainLayout>
              <ContactUsView />
            </MainLayout>
          )}
        />
        <Route
          path="/candy"
          component={() => (
            <MainLayout>
              {' '}
              <MarketView />
            </MainLayout>
          )}
        />
        <Route
          path="/gallery"
          component={() => (
            <MainLayout>
              <GalleryView />
            </MainLayout>
          )}
        />
        <Route
          path="/blog"
          component={() => (
            <MainLayout>
              <BlogView />
            </MainLayout>
          )}
        />
        <Route
          path="/tutorial"
          component={() => (
            <MainLayout>
              <TutorialView />
            </MainLayout>
          )}
        />
        <Route
          path="/admin"
          component={() => (
            <MainLayout>
              <AdminView />
            </MainLayout>
          )}
        />
        <Route
          path="/coin"
          component={() => (
            <MainLayout>
              <CoinView />
            </MainLayout>
          )}
        />
        <Route
          path="/home"
          component={() => (
            <HomeLayout>
              <HomeView />
            </HomeLayout>
          )}
        />

        <Route
          exact={true}
          path="/"
          component={() => (
            <HomeLayout>
              <HomeView />
            </HomeLayout>
          )}
        />
      </Providers>
    </SolanaClusterProvider>
  );
}

/**
 *
 * Asynchronously loads the component for WalletView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WalletView = lazyLoad(
  () => import('./index'),
  module => module.WalletView,
);

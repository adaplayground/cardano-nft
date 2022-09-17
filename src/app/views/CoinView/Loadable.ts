/**
 *
 * Asynchronously loads the component for CoinView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CoinView = lazyLoad(
  () => import('./index'),
  module => module.CoinView,
);

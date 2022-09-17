/**
 *
 * Asynchronously loads the component for NftDetailView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NftDetailView = lazyLoad(
  () => import('./index'),
  module => module.NftDetailView,
);

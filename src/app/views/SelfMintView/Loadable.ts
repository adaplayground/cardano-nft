/**
 *
 * Asynchronously loads the component for DiyView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SelfMintView = lazyLoad(
  () => import('./index'),
  module => module.SelfMintView,
);

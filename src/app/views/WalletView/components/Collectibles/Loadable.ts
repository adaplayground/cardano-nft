/**
 *
 * Asynchronously loads the component for Collectibles
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Collectibles = lazyLoad(
  () => import('./index'),
  module => module.Collectibles,
);

/**
 *
 * Asynchronously loads the component for CollectibleCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CollectibleCard = lazyLoad(
  () => import('./index'),
  module => module.CollectibleCard,
);

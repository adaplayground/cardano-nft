/**
 *
 * Asynchronously loads the component for ProductCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductCard = lazyLoad(
  () => import('./index'),
  module => module.ProductCard,
);

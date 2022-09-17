/**
 *
 * Asynchronously loads the component for ProductCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductCard = lazyLoad(
  () => import('app/views/GalleryView/components/GalleryProductCard/index'),
  module => module.GalleryProductCard,
);

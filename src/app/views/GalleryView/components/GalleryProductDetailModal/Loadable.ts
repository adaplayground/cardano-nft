/**
 *
 * Asynchronously loads the component for NftDetailView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GalleryProductDetailView = lazyLoad(
  () =>
    import('app/views/GalleryView/components/GalleryProductDetailModal/index'),
  module => module.GalleryProductDetailView,
);

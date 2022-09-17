/**
 *
 * Asynchronously loads the component for GalleryView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GalleryView = lazyLoad(
  () => import('./index'),
  module => module.GalleryView,
);

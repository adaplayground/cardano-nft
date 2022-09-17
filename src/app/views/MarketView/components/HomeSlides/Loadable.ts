/**
 *
 * Asynchronously loads the component for HomeSlides
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HomeSlides = lazyLoad(
  () => import('./index'),
  module => module.HomeSlides,
);

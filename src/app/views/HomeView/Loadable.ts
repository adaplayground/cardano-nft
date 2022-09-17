/**
 *
 * Asynchronously loads the component for HomeView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HomeView = lazyLoad(
  () => import('./index'),
  module => module.HomeView,
);

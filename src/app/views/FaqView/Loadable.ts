/**
 *
 * Asynchronously loads the component for FaqView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FaqView = lazyLoad(
  () => import('./index'),
  module => module.FaqView,
);

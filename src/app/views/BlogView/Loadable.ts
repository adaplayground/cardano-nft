/**
 *
 * Asynchronously loads the component for BlogView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BlogView = lazyLoad(
  () => import('./index'),
  module => module.BlogView,
);

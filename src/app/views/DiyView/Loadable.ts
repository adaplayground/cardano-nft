/**
 *
 * Asynchronously loads the component for DiyView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DiyView = lazyLoad(
  () => import('./index'),
  module => module.DiyView,
);

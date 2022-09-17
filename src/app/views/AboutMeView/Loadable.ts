/**
 *
 * Asynchronously loads the component for AboutMeView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AboutMeView = lazyLoad(
  () => import('./index'),
  module => module.AboutMeView,
);

/**
 *
 * Asynchronously loads the component for TutorialView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TutorialView = lazyLoad(
  () => import('./index'),
  module => module.TutorialView,
);

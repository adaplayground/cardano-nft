/**
 *
 * Asynchronously loads the component for AdminView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AdminView = lazyLoad(
  () => import('./index'),
  module => module.AdminView,
);

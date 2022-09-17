/**
 *
 * Asynchronously loads the component for ContactUsView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContactUsView = lazyLoad(
  () => import('./index'),
  module => module.ContactUsView,
);

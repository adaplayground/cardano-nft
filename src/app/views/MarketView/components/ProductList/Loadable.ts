/**
 *
 * Asynchronously loads the component for ProductList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductList = lazyLoad(
  () => import('app/views/MarketView/components/ProductList/index'),
  module => module.ProductList,
);

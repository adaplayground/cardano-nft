// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
import { RouterState } from 'store/reducers';
import { WalletViewState } from 'app/views/WalletView/slice/types';
import { MarketViewState } from 'app/views/MarketView/slice/types';
import { GalleryViewState } from 'app/views/GalleryView/slice/types';

export interface RootState {
  router: RouterState;
  walletView: WalletViewState;
  marketView: MarketViewState;
  galleryView: GalleryViewState;
}

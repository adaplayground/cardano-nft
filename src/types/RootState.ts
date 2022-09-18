// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
import { RouterState } from 'store/reducers';

export interface RootState {
  router: RouterState;
}

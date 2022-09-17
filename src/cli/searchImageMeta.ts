import { ImageMetaInfoType, ImageSizeType } from 'types';
import { getImageMetaInfos, searchImageMetaInfo } from '../store/nftFireStore';

(async () => {
  // const results =await searchImageMetaInfo('cat',50);
  // console.log(results);

  const results1 = await getImageMetaInfos(100, 60);
  console.log(results1);
})();

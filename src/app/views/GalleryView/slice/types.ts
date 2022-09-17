/* --- STATE --- */
import { ImageMetaInfoType } from 'types';

export interface GalleryViewState {
  metaData: { [key: string]: ImageMetaInfoType };
  loading: boolean;
  errorMessage?: string;
  currentPage: number;
  searchText: string;
}

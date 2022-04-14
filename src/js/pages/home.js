import {store, PAGE_STATE_KEY} from '../store';
import {handleGallery} from '../handlers/handleGallery';

export const initHome = () => {
  store.mode = 'trend';
  sessionStorage.setItem(PAGE_STATE_KEY, store.mode);

  handleGallery('trend', 1);
};

import { store } from '../store';
import { handleGallery } from '../handlers/handleGallery';

export const initHome = () => {
  store.mode = 'trend';

  handleGallery('trend', 1);
};

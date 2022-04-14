import { store } from '../store';
import { checkToken } from '../utils/checkToken';
import { handleGallery } from '../handlers/handleGallery';
import { renderEmptyGallery } from '../render/renderEmptyGallery';
import { renderPagination } from '../render/renderPagination';

export const initLibrary = () => {
  store.mode = 'watched';

  if (checkToken()) {
    handleGallery('watched', 1);
  } else {
    renderPagination();
    renderEmptyGallery();
  }
};

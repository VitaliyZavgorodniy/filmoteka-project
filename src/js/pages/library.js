import { store } from '../store';

import { checkToken } from '../utils/checkToken';

import { handleGallery } from '../handlers/handleGallery';
import { showLibSelector } from '../handlers/showLibSelector';

import { renderEmptyGallery } from '../render/renderEmptyGallery';
import { renderPagination } from '../render/renderPagination';

export const initLibrary = () => {
  const { rootHeader } = store.refs;

  rootHeader.classList.add('header__container_library');
  rootHeader.classList.remove('header__container_home');

  localStorage.setItem('page', 'library');

  store.mode = 'watched';

  showLibSelector();
  if (checkToken()) {
    handleGallery('watched', 1);
  } else {
    renderPagination();
    renderEmptyGallery();
  }
};

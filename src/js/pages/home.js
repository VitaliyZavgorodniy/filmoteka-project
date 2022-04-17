import { store } from '../store';

import { handleGallery } from '../handlers/handleGallery';
import { showSearchForm } from '../handlers/showSearchForm';
import { handleSearchError } from '../handlers/handleSearchError';

export const initHome = () => {
  const { rootHeader } = store.refs;

  rootHeader.classList.remove('header__container_library');
  rootHeader.classList.add('header__container_home');

  localStorage.setItem('page', 'home');

  store.mode = 'trend';

  handleSearchError();
  showSearchForm();
  handleGallery('trend', 1);
};

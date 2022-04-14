import {store, PAGE_STATE_KEY} from '../store';
import {checkToken} from '../utils/checkToken';
import {handleGallery} from '../handlers/handleGallery';
import {renderEmptyGallery} from '../render/renderEmptyGallery';
import {renderPagination} from '../render/renderPagination';

export const initLibrary = () => {
  store.mode = 'watched';
  sessionStorage.setItem(PAGE_STATE_KEY, store.mode);

  if (checkToken()) {
    handleGallery('watched', 1);
  } else {
    renderPagination();
    renderEmptyGallery();
  }
};

export const initLibraryMode = (mode = 'watched', page = 1) => {
  store.mode = mode;
  sessionStorage.setItem(PAGE_STATE_KEY, store.mode);

  const activeBtn = document.querySelector('[data-action].is-active');
  activeBtn.classList.remove('is-active');

  if (mode === 'watched' || mode === 'queue') {
    const setActiveBtn = document.querySelector(`[data-action="${mode}"]`);
    setActiveBtn.classList.add('is-active');
  }

  if (checkToken()) {
    handleGallery(mode, page);
  } else {
    renderPagination();
    renderEmptyGallery();
  }
};

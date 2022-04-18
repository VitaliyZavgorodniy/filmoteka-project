import { store } from '../store';

import { fetchTrending, fetchSearch } from '../services/serviceMoviesAPI';
import { fetchLibrary } from '../services/serviceDatabase';

import { renderGallery } from '../render/renderGallery';
import { renderSkeletonGallery } from '../render/renderSkeletonGallery';
import { renderPagination } from '../render/renderPagination';
import { renderEmptyGallery } from '../render/renderEmptyGallery';

import { handleSearchError } from './handleSearchError';

export const handleGallery = (mode, page) => {
  renderSkeletonGallery();

  store.mode = mode;
  const { query } = store;

  if (mode === 'trend' || mode === 'find') {
    const fetchMethod = mode === 'find' ? fetchSearch : fetchTrending;

    fetchMethod(page, query).then((res) => {
      const { list, totalItems } = res;

      if (!totalItems) {
        renderEmptyGallery();

        return handleSearchError(
          'Search result not successful. Enter the correct movie name'
        );
      }
      
      if (page == 1) renderPagination(totalItems);
      list.length && renderGallery(list);
    });
  }

  if (mode === 'watched' || mode === 'queue') {
    const uid = store.user.uid;
    renderPagination();
    fetchLibrary(uid, mode).then((res) => renderGallery(res));
  }
};

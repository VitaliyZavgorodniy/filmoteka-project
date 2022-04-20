import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { fetchTrending, fetchSearch } from '../services/serviceMoviesAPI';
import { fetchLibrary } from '../services/serviceDatabase';

import { renderGallery } from '../render/renderGallery';
import { renderSkeletonGallery } from '../render/renderSkeletonGallery';
import { renderPagination } from '../render/renderPagination';
import { renderEmptyGallery } from '../render/renderEmptyGallery';

import { handleNotification } from './handleNotification';

export const handleGallery = () => {
  const { mode, page, query, language, user, category } = store;
  renderSkeletonGallery();

  if (mode === 'trend' || mode === 'find') {
    const fetchMethod = mode === 'find' ? fetchSearch : fetchTrending;

    fetchMethod(language, page, category, query).then((res) => {
      const { list, totalItems } = res;

      if (!totalItems) {
        renderEmptyGallery();

        handleNotification(
          'error',
          languagePackage.messageErrorSearch[language]
        );

        return;
      }

      if (page == 1) renderPagination(totalItems);
      list.length && renderGallery(list);
    });
  }

  if (mode === 'watched' || mode === 'queue') {
    if (user) {
      const uid = store.user.uid;
      renderPagination();
      fetchLibrary(uid, mode).then((res) => {
        if (res.length) return renderGallery(res);

        renderEmptyGallery();
        handleNotification(
          'info',
          languagePackage.messageEmptyLibrary[language]
        );
      });
    } else {
      renderEmptyGallery();
    }
  }
};

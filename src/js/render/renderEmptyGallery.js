import { store } from '../store';

import { templateGalleryEmpty } from '../templates/templateGalleryEmpty';
import { renderPagination } from '../render/renderPagination';

export const renderEmptyGallery = () => {
  const { rootGallery } = store.refs;

  renderPagination();

  rootGallery.innerHTML = '';
  rootGallery.insertAdjacentHTML('afterbegin', templateGalleryEmpty());
};

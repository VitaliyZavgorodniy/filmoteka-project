import { store } from '../store';

import { fetchSingleMovie } from '../services/serviceMoviesAPI';

import { renderDetails } from '../render/details/renderDetails';
import { renderSkeletonDetails } from '../render/renderSkeletonDetails';

export const openDetails = (e) => {
  const index = e.target.getAttribute('data-id');
  if (!index) return;

  renderSkeletonDetails();

  const { language } = store;
  const { rootDetails, body } = store.refs;
  rootDetails.classList.remove('is-hidden');
  body.classList.add('is-open');

  index && fetchSingleMovie(language, index).then((res) => renderDetails(res));
};

export const closeDetails = (e) => {
  const { rootDetails, body } = store.refs;

  if (e?.code === 'Escape') {
    body.classList.add('is-open');
    rootDetails.classList.add('is-hidden');
    return;
  }

  const element = e.target.getAttribute('data-action');

  if (element === 'close-modal') {
    body.classList.remove('is-open');
    rootDetails.classList.add('is-hidden');
    return;
  }
};

document.addEventListener('keydown', closeDetails);
store.refs.rootGallery.addEventListener('click', openDetails);
store.refs.rootDetails.addEventListener('click', closeDetails);

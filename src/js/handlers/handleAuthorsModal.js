import { store } from '../store';

import { templateAuthorsModal } from '../templates/templateAuthorsModal';

export const openAuthorsModal = (e) => {
  e.preventDefault();

  const { rootDetails, body } = store.refs;

  rootDetails.innerHTML = '';
  rootDetails.classList.remove('is-hidden');
  body.classList.add('is-open');

  rootDetails.insertAdjacentHTML('afterbegin', templateAuthorsModal());
};

store.refs.authorsModalLink.addEventListener('click', openAuthorsModal);

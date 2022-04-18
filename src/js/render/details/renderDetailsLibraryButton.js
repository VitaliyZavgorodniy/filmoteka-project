import { store } from '../../store';

import {
  updateLibrary,
  removeFromLibrary,
  checkLibraryContains,
} from '../../services/serviceDatabase';

import { handleGallery } from '../../handlers/handleGallery';

import { templateSpinner } from '../../templates/templateSpinner';
import { templateDetailsButton } from '../../templates/templateDetailsButton';

const showSpinner = (root) => {
  root.innerHTML = '';
  root.insertAdjacentHTML('afterbegin', templateSpinner());
};

export const renderDetailsLibraryButton = async (library = watched, movie) => {
  const buttonRoot = document.querySelector(`[data-root="${library}"]`);
  const { id } = movie;
  const { uid } = store.user;
  const { mode } = store;

  showSpinner(buttonRoot);

  const isContains = await checkLibraryContains(uid, id, library);

  buttonRoot.innerHTML = '';

  if (isContains) {
    buttonRoot.insertAdjacentHTML(
      'afterbegin',
      templateDetailsButton(`data-remove-${library}`, `remove from ${library}`)
    );

    document
      .querySelector(`[data-remove-${library}]`)
      .addEventListener('click', () => {
        showSpinner(buttonRoot);
        removeFromLibrary(uid, movie, library).then(() => {
          renderDetailsLibraryButton(library, movie);
          handleGallery(mode);
        });
      });
  } else {
    buttonRoot.insertAdjacentHTML(
      'afterbegin',
      templateDetailsButton(`data-add-${library}`, `add to ${library}`)
    );

    document
      .querySelector(`[data-add-${library}]`)
      .addEventListener('click', () => {
        showSpinner(buttonRoot);
        updateLibrary(uid, movie, library).then(() => {
          renderDetailsLibraryButton(library, movie);
          handleGallery(mode);
        });
      });
  }
};

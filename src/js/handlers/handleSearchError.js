import { store } from '../store';

export const handleSearchError = (errorTitle = '') => {
  const { rootErrors } = store.refs;
  rootErrors.textContent = errorTitle;
};

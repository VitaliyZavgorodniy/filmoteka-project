import { store } from '../store';

import { handleGallery } from './handleGallery';

const handleSearch = (e) => {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.target;

  const query = searchQuery.value.trim();

  if (query) {
    store.mode = 'find';
    store.page = 1;
    store.query = query;

    handleGallery();
  }

  e.target.reset();
};

store.refs.refSearchform.addEventListener('submit', handleSearch);

import { store } from "../store";
import { handleGallery } from "./handleGallery";

const handleSearch = (e) => {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.target;

  const query = searchQuery.value.trim();

  if (query) {
    store.mode = "search";
    store.query = query;
    handleGallery("find", 1, searchQuery.value);
  }
};

store.refs.refSearchform.addEventListener("submit", handleSearch);

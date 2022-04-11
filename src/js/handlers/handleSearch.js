import { store } from "../store";
import { handleGallery } from "./handleGallery";

const handleSearch = (e) => {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.target;

  store.mode = "search";

  handleGallery("find", 1, searchQuery.value);
};

store.refs.refSearchform.addEventListener("submit", handleSearch);
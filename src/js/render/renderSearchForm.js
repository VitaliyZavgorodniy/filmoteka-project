import { store } from "../store";
import { clearActive } from "../utils/clearClasses";

export const renderSearchForm = () => {
  const { refSearchform, rootControl } = store.refs;

  clearActive(rootControl);

  refSearchform.classList.add("active");
};

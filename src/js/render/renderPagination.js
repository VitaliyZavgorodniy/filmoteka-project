import { store } from "../store";
import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { handleGallery } from "../handlers/handleGallery";

export const renderPagination = (totalItems = 1) => {
  const { mode } = store;
  const { rootPagination } = store.refs;

  if (parseInt(totalItems) < 20) return (rootPagination.innerHTML = "");

  const instance = new Pagination(rootPagination, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on("beforeMove", (e) => handleGallery(mode, e.page, store.query));
};

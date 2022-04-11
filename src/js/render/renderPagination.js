import Pagination from "tui-pagination";
import { handleGallery } from "../handlers/handleGallery";

export const renderPagination = () => {
  const { list, totalPages, totalItems } = res;

  const instance = new Pagination(store.refs.rootPagination, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on("beforeMove", (e) =>
    handleGallery(store.mode, e.page, store.query)
  );
};
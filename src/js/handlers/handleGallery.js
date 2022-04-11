import Pagination from "tui-pagination";
import { store } from "../store";

import {
  fetchGenres,
  fetchTrending,
  fetchSearch,
  fetchSingleMovie,
} from "../services/serviceMoviesAPI";
import { fetchWatchedList, fetchQueuedList } from "../services/serviceDatabase";

import { renderGallery } from "../render/renderGallery";
import { renderSkeletonGallery } from "../render/renderSkeletonGallery";

export const handleGallery = (mode, page, query) => {
  renderSkeletonGallery();

  store.mode = mode;
  if (mode === "trend" || mode === "find") {
    const fetchMethod = mode === "find" ? fetchSearch : fetchTrending;

    fetchMethod(page, query).then((res) => {
      const { list, totalPages, totalItems } = res;

      list.length && renderGallery(list);
    });
  }

  if (mode === "watched") {
    const uid = store.user.uid;
    fetchWatchedList(uid).then((res) => renderGallery(res));
  }
};

import { store } from "../store";

import {
  fetchGenres,
  fetchTrending,
  fetchSearch,
  fetchSingleMovie,
} from "../services/serviceMoviesAPI";
import { fetchLibrary } from "../services/serviceDatabase";

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

  if (mode === "watched" || mode === "queue") {
    const uid = store.user.uid;
    fetchLibrary(uid, mode).then((res) => renderGallery(res));
  }
};
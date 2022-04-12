import { store } from "../store";
import { fetchSingleMovie } from "../services/serviceMoviesAPI";
import { renderDetails } from "../render/renderDetails";
import { renderSkeletonDetails } from "../render/renderSkeletonDetails";

export const openDetails = (e) => {
  const index = e.target.getAttribute("data-id");
  if (!index) return;

  renderSkeletonDetails();
  const { rootDetails } = store.refs;
  rootDetails.classList.remove("is-hidden");

  index && fetchSingleMovie(index).then((res) => renderDetails(res));
};

export const closeDetails = (e) => {
  const { rootDetails } = store.refs;

  if (e?.code === "Escape") return rootDetails.classList.add("is-hidden");

  const element = e.target.getAttribute("data-action");

  if (element === "close-modal") return rootDetails.classList.add("is-hidden");
};

document.addEventListener("keydown", closeDetails);
store.refs.rootGallery.addEventListener("click", openDetails);
store.refs.rootDetails.addEventListener("click", closeDetails);

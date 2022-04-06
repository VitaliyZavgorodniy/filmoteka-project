import { fetchSingleMovie } from "../services/themoviedbService";
import { renderDetails } from "../render/renderDetails";

export const handleDetails = (e) => {
  const id = e.target.getAttribute("data-id");

  fetchSingleMovie(id)
    .then((res) => renderDetails(res))
    .catch((e) => console.error(e));
};
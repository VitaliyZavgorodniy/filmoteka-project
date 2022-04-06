import {
  handleAddToWatched,
  handleAddToQueue
} from "../handlers/handleLibrary";
import { checkInWatchedItem, checkInQueueItem } from "../handlers/checkLibrary";

export const renderDetails = (data) => {
  const rootModal = document.querySelector(".modal__wrapper");

  const toogleWatched = () => btnAddWatched.setAttribute("disabled", "");

  const {
    id,
    original_title,
    vote_average,
    vote_count,
    poster_path,
    popularity,
    overview
  } = data;

  const isWatched = checkInWatchedItem(id);
  const isQueued = checkInQueueItem(id);
  const genres = data.genres.map((item) => item.name).join(", ");

  const elementHTML = `
    <div class="modal">
      <p>${original_title}</p>
      <p>${vote_average}</p>
      <p>${vote_count}</p>
      <p>${genres}</p>
      <p>${poster_path}</p>
      <p>${popularity}</p>
      <p>${overview}</p>

      <button ${
        isWatched ? "disabled" : ""
      } data-action="add-watched">to watched</button>

      <button ${
        isQueued ? "disabled" : ""
      } data-action="add-watched">to queue</button>
    </div>
  `;

  rootModal.innerHTML = elementHTML;
  rootModal.classList.add("active");

  const btnAddWatched = document.querySelector('[data-action="add-watched"]');
  btnAddWatched.addEventListener("click", () =>
    handleAddToWatched(data, toogleWatched)
  );
};

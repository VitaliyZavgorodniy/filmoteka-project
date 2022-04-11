import { store } from "../store";
import {
  fetchLibrary,
  updateLibrary,
  removeFromLibrary,
} from "../services/serviceDatabase";
import { checkInLib } from "../utils/checkInLib";
import { renderSpinner } from "./renderSpinner";
import { loginGoogle } from "../services/serviceAuth";

import iconGoogleLogo from "../../assets/icons/google-logo.svg";

export const renderWatchButton = (movie) => {
  const buttonRoot = document.querySelector('[data-root="watched"]');
  buttonRoot.innerHTML = renderSpinner();
  const { id } = movie;
  const { uid } = store.user;

  fetchLibrary(uid, "watched").then((res) => {
    const isWatched = checkInLib(id, res);

    if (isWatched) {
      buttonRoot.innerHTML = `
          <button 
            type="button" 
            class="button-library" 
            data-remove-watched
          >
            remove from watched
          </button>
        `;

      document
        .querySelector("[data-remove-watched]")
        .addEventListener("click", () =>
          removeFromLibrary(uid, movie, "watched").then(() =>
            renderWatchButton(movie)
          )
        );
    } else {
      buttonRoot.innerHTML = `
          <button 
            type="button" 
            class="button-library" 
            data-add-watched
          >
            add to watched
          </button>
        `;

      document
        .querySelector("[data-add-watched]")
        .addEventListener("click", () =>
          updateLibrary(uid, movie, "watched").then(() =>
            renderWatchButton(movie)
          )
        );
    }
  });
};

export const renderQueueButton = (movie) => {
  const buttonRoot = document.querySelector('[data-root="queue"]');
  const { id } = movie;
  const { uid } = store.user;

  buttonRoot.innerHTML = renderSpinner();

  fetchLibrary(uid, "queue").then((res) => {
    const isQueued = checkInLib(id, res);

    if (isQueued) {
      buttonRoot.innerHTML = `
          <button 
            type="button" 
            class="button-library" 
            data-remove-queue
          >
            remove from queue
          </button>
        `;

      document
        .querySelector("[data-remove-queue]")
        .addEventListener("click", () =>
          removeFromLibrary(uid, movie, "queue").then(() =>
            renderQueueButton(movie)
          )
        );
    } else {
      buttonRoot.innerHTML = `
          <button 
            type="button" 
            class="button-library" 
            data-add-queue
          >
            add to queue
          </button>
        `;

      document
        .querySelector("[data-add-queue]")
        .addEventListener("click", () =>
          updateLibrary(uid, movie, "queue").then(() =>
            renderQueueButton(movie)
          )
        );
    }
  });
};

export const renderLoginButton = (movie) => {
  const rootButtons = document.querySelector(".details-popup__menu");

  const markup = `
        <button class="login-button" data-action="login-google-panel">
          <img
            class="login-button__icon"
            src=${iconGoogleLogo}
            alt="google-icon"
          />
          <span class="login-button__title">Sign in with Google</span>
        </button>`;

  rootButtons.innerHTML = markup;

  document
    .querySelector("[data-action=login-google-panel]")
    .addEventListener("click", () =>
      loginGoogle().then((res) => {
        if (res.status === 200) {
          const { uid, displayName } = res;
          localStorage.setItem("user", JSON.stringify({ uid, displayName }));
          store.user = { uid, displayName };

          rootButtons.innerHTML = `
          <li class="details-popup__menu_item" data-root="watched"></li>
          <li class="details-popup__menu_item" data-root="queue"></li>`;

          renderWatchButton(movie);
          renderQueueButton(movie);
        }
      })
    );
};

import { store } from "../store";
import iconCloseButton from "../../assets/icons/close.svg";

export const renderSkeletonDetails = () => {
  const { rootDetails } = store.refs;

  const markup = `
  <div class="details-popup">
    <button class="details-popup__close-btn" type="button" data-modal-close data-action="close-modal">
      <img 
        class="details-popup__close-icon"
        src=${iconCloseButton}
        alt="close"
        data-action="close-modal"
      </img>  
    </button>
    <div class="details-popup__preview skeleton skeleton_vertical"></div>
    <div class="details-popup__info">
      <div class="movie-wrapper">
        <p class="modal__title skeleton skeleton_text"></p>
        <div class="modal-table skeleton skeleton_blank"></div>
        <p class="modal__subtitle skeleton skeleton_text"></p>
        <p
          class="modal__desc skeleton skeleton_blank skeleton skeleton_text"
        ></p>
      </div>

      <ul class="details-popup__menu">
        <li class="details-popup__menu_item" data-root="watched"></li>
        <li class="details-popup__menu_item" data-root="queue"></li>
      </ul>
    </div>
    `;

  rootDetails.innerHTML = markup;
}
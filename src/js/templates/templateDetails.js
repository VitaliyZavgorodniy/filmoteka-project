import iconCloseButton from "../../assets/icons/close.svg";

export const templateDetails = (
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview
) => `
  <div class="modal">
    <button class="close-modal-button" type="button" data-modal-close data-action="close-modal">
      <img 
        class="close-modal-button__icon"
        src=${iconCloseButton}
        alt="close"
        data-action="close-modal"
      </img>  
    </button>
    <div class="details-popup">
      <div class="details-popup__thumb">
        <img 
            src="https://themoviedb.org/t/p/w500${poster_path}" 
            alt="${original_title}" 
        />
      </div>

      <div class="details-popup__info">
        <h2 class="details-popup__title">${original_title}</h2>

        <table class="ranks-table details-popup__block">
          <tr>
            <th class="ranks-table__head">Vote / Votes</th>
            <td class="ranks-table__cell">
              <span class="rating rating_accent">${vote_average}</span> /
              <span class="rating">${vote_count}</span>
            </td>
          </tr>
          <tr>
            <th class="ranks-table__head">Popularity</th>
            <td class="ranks-table__cell">${popularity}</td>
          </tr>
          <tr>
            <th class="ranks-table__head">Original Title</th>
            <td class="ranks-table__cell">${original_title}</td>
          </tr>
          <tr>
            <th class="ranks-table__head">Genre</th>
            <td class="ranks-table__cell">${genres}</td>
          </tr>
        </table>

        <p class="details-popup__subtitle details-popup__block">About</p>
        <p class="details-popup__description details-popup__block">
          ${overview}
        </p>

        <ul class="details-popup__menu details-popup__block">
          <li class="details-popup__menu_item" data-root="watched">
          
          </li>
          <li class="details-popup__menu_item" data-root="queue">

          </li>
        </ul>
      </div>
    </div>
  </div>
`;

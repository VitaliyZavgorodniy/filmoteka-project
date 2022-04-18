import iconCloseButton from '../../assets/icons/close.svg';
import youtubeIcon from '../../assets/icons/sprite.svg';

export const templateDetails = (
  lngPack,
  language,
  poster_path,
  title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id
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
        <button type="button" class="watch-trailer-btn is-hidden" data-id="${id}">
          <svg class="watch-trailer-btn__icon" width="70" height="50">
            <use href="${youtubeIcon}#icon-youtube"></use>
          </svg>
      </button>
        <picture class="card__image">
          <source 
            srcset="https://themoviedb.org/t/p/w500${poster_path}"
            media="(min-width: 1024px)">
          <source 
            srcset="https://themoviedb.org/t/p/w342${poster_path}"
            media="(min-width: 768px)">
          <img 
            alt="${original_title}" 
            loading="lazy"
            src="https://themoviedb.org/t/p/w342${poster_path}"
          />
        </picture>
      </div>

      <div class="details-popup__info">
        <h2 class="details-popup__title">${title}</h2>

        <table class="ranks-table details-popup__block">
          <tr>
            <th class="ranks-table__head">
              ${lngPack.modalVotes[language]}
            </th>
            <td class="ranks-table__cell">
              <span class="rating rating_accent">${vote_average}</span> /
              <span class="rating">${vote_count}</span>
            </td>
          </tr>
          <tr>
            <th class="ranks-table__head">
              ${lngPack.modalPopularity[language]}
            </th>
            <td class="ranks-table__cell">
              ${popularity}
            </td>
          </tr>
          <tr>
            <th class="ranks-table__head">
              ${lngPack.modalTitle[language]}
            </th>
            <td class="ranks-table__cell">
              ${original_title}
            </td>
          </tr>
          <tr>
            <th class="ranks-table__head">
              ${lngPack.modalGenres[language]}
            </th>
            <td class="ranks-table__cell">
              ${genres}
            </td>
          </tr>
        </table>

        <p class="details-popup__subtitle details-popup__block">
          ${lngPack.modalAbout[language]}
        </p>
        <p class="details-popup__description details-popup__block">
          ${overview}
        </p>

        <ul class="details-popup__menu details-popup__block">
          <li class="details-popup__menu_item" id="watched" data-root="watched">
          
          </li>
          <li class="details-popup__menu_item" data-root="queue">

          </li>
        </ul>
      </div>
    </div>
  </div>
`;

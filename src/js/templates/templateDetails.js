import iconCloseButton from '../../assets/icons/close.svg';

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
        <button type="button" class="watch-trailer-btn" data-id="${id}">
          <svg class="watch-trailer-btn__icon" viewBox="0 0 461.001 461.001">
            <path
              d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
            c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
            C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
            c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
            />
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

import sprite from '../../assets/icons/sprite.svg';
import iconShare from '../../assets/icons/share.svg';

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
  id,
  link,
  category,
  date,
  cast
) => `
  <div class="modal">
    <button class="close-modal-button" type="button" data-modal-close data-action="close-modal">
      <svg class="close-modal-button__icon" alt="close" data-action="close-modal">
      <use href="${sprite}#modal-close"></use>
      </svg>
    </button>
    <div class="details-popup">
      <div class="details-popup__thumb">
        <button type="button" class="watch-trailer-btn is-hidden" data-id="${id}" data-category="${category}">
          <svg class="watch-trailer-btn__icon" width="70" height="50">
            <use href="${sprite}#icon-youtube"></use>
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
              ${lngPack.modalDates[language]}
            </th>
            <td class="ranks-table__cell">
              ${date}
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
        
        <p class="details-popup__subtitle details-popup__block">
          ${lngPack.shareButtons[language]}
        </p>

        <ul class="sharing">
          <li class="sharing__item">
            <button 
              class="sharing__button" 
              data-share="link" 
              data-url="${link}"
            >
              <svg class="sharing__icon" width="31" height="31">
                <use href="${iconShare}#link"></use>
              </svg>
            </button>          
          </li>
          <li class="sharing__item">
            <button 
              class="sharing__button" 
              data-sharer="telegram" 
              data-title="${lngPack.shareText[language]}: ${title}" 
              data-url="${link}"
            >
              <svg class="sharing__icon" width="35" height="35">
                <use href="${iconShare}#telegram"></use>
              </svg>
            </button>          
          </li>
          <li class="sharing__item">
            <button 
              class="sharing__button" 
              data-sharer="facebook"
              data-hashtag="filmoteka"
              data-title="${lngPack.shareText[language]}: ${title}"
              data-url="${link}"
            >
              <svg class="sharing__icon" width="35" height="35">
                <use href="${iconShare}#facebook"></use>
              </svg>
            </button>          
          </li>
          <li class="sharing__item">
            <button 
              class="sharing__button" 
              data-sharer="linkedin"
              data-title="${lngPack.shareText[language]}: ${title}" 
              data-url="${link}"
            >
              <svg class="sharing__icon" width="35" height="35">
                <use href="${iconShare}#linkedin"></use>
              </svg>
            </button>          
          </li>
        </ul>

        
      </div>
    </div>
    <p class="details-popup__subtitle details-popup__block">
          ${lngPack.modalCast[language]}
        </p>
        <ul class="cast">
          ${templateDetailsCast(cast)}
        </ul>
  </div>
`;

const templateDetailsCast = (cast) =>
  cast
    .map(({ character, name, profile_path }) =>
      profile_path
        ? `
  <li class="cast__item">
    <div 
      class="cast__thumb" 
      style="background-image:url(https://themoviedb.org/t/p/w185/${profile_path})"
    >
    </div>
    
    <h4 class="cast__name">${name}</h4>
    <p class="cast__role">${character}</p>
  </li>
`
        : ''
    )
    .join('');

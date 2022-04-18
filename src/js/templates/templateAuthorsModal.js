import iconCloseButton from '../../assets/icons/close.svg';

import auth_brad_pitt from '../../assets/photos/brad_pitt.jpg';
import auth_clooney from '../../assets/photos/auth_clooney.jpg';
import auth_joey from '../../assets/photos/auth_joey.jpg';
import auth_jeniffer from '../../assets/photos/auth_jeniffer.jpg';
import auth_monica from '../../assets/photos/auth_monica.jpg';
import auth_perry from '../../assets/photos/auth_perry.jpg';
import auth_ross from '../../assets/photos/auth_ross.jpg';
import auth_mike from '../../assets/photos/auth_mike.jpg';

export const templateAuthorsModal = () => `
    <div class="modal">
      <button class="close-modal-button" type="button" data-modal-close data-action="close-modal">
        <img 
          class="close-modal-button__icon"
          src=${iconCloseButton}
          alt="close"
          data-action="close-modal"
        </img>  
      </button>
      
      <div class="authors">
        <h3 class="authors__title">Authors</h3>
        <ul class="authors__list">
          <li class="authors__item">
            <img src="${auth_brad_pitt}" alt="Roman Grusha" class="authors__thumb">
            <p class="authors__name">Roman Grusha</p>
          </li>
          <li class="authors__item">
            <img src="${auth_jeniffer}" alt="Tatiana Sierkova" class="authors__thumb">
            <p class="authors__name">Tatiana Sierkova</p>
          </li>
          <li class="authors__item">
            <img src="${auth_clooney}" alt="Vasyl Gumeniuk" class="authors__thumb">
            <p class="authors__name">Vasyl Gumeniuk</p>
          </li>
          <li class="authors__item">
            <img src="${auth_ross}" alt="Vitaliy Zavgorodniy" class="authors__thumb">
            <p class="authors__name">Vitaliy Zavgorodniy</p>
          </li>
          <li class="authors__item">
            <img src="${auth_joey}" alt="Vladyslav Rozhenko" class="authors__thumb">
            <p class="authors__name">Vladyslav Rozhenko</p>
          </li>
          <li class="authors__item">
            <img src="${auth_mike}" alt="Алексей" class="authors__thumb">
            <p class="authors__name">Алексей</p>
          </li>
          <li class="authors__item">
            <img src="${auth_monica}" alt="Алена Коваль" class="authors__thumb">
            <p class="authors__name">Алена Коваль</p>
          </li>
          <li class="authors__item">
            <img src="${auth_perry}" alt="Нет Имени" class="authors__thumb">
            <p class="authors__name">Нет Имени</p>
          </li>
        </ul>
      </div>
    </div>
`;

import { store } from "../store";

export const renderSkeletonGallery = () => {
  store.refs.rootGallery.innerHTML = `
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  <li class="card">
    <div class="card__thumb skeleton"></div>
    <p class="card__title skeleton skeleton_text"></p>
    <p class="card__text skeleton skeleton_text"></p>
  </li>
  `;
};

import throttle from 'lodash.throttle';

const btnUpElem = document.createElement('button');
btnUpElem.setAttribute('type', 'button');
btnUpElem.classList.add('btn-up');
btnUpElem.classList.add('is-hidden');
btnUpElem.innerHTML = `<svg class="btn-up__icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>`;
document.body.append(btnUpElem);

export const upToTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

btnUpElem.addEventListener('click', upToTop);

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnUpElem.classList.remove('is-hidden');
  } else {
    btnUpElem.classList.add('is-hidden');
  }
};

window.addEventListener('scroll', throttle(scrollFunction, 500));

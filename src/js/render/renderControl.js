const rootModal = document.querySelector('[data-action="control-bar"]');

export const renderControl = () => {
  const elementHTML = `
    <button class="login-button" data-action="show-watched">Watched</button>
    <button class="login-button" data-action="show-queue">Queue</button>
  `;

  rootModal.innerHTML = elementHTML;
};

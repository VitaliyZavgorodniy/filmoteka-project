export const renderLogin = () => {
  const rootModal = document.querySelector('[data-action="control-bar"]');
  
  const elementHTML = `<button class="login-button" data-action="login">Login</button>`;

  rootModal.innerHTML = elementHTML;
};

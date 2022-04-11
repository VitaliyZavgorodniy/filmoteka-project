import { store } from "../store";

export const renderEmptyGallery = () => {
  store.refs.rootGallery.innerHTML = `
    <h1>Nothing to show</h1>
  `;
};

import image from '../../assets/images/no-gallery.svg';

export const templateGalleryEmpty = () => `
  <div class="gallery__message">
    <h2 class="gallery__message_title">Oops... here's nothing to show</h2>
    <img 
      class="gallery__message_image"
      src=${image} 
      alt="nothing was found"
    />
  </div>
`;

import products from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryItemMarkup(products);

function createGalleryItemMarkup(products) {
    return products.map(product => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${product.original}"
  >
    <img
      class="gallery__image"
      src="${product.preview}"
      data-source="${product.original}"
      alt="${product.description}"
    />
  </a>
</li>`;
    }).join('');
};

galleryRef.insertAdjacentHTML('afterbegin', galleryItemMarkup);
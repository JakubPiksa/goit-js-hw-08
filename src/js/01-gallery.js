import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(`kupa`);



const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = '';
for (const image of galleryItems) {
  const newImage = `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`;
  galleryEl.innerHTML += newImage;
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 200 });
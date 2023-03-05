// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this 

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__link" href= "${original}">
    <img
      class= "gallery__image"
      src= "${preview}"
      alt= "${description}"
    />
  </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox('.gallery__link', {captionsData:'alt', captionDelay: 250 });
gallery.on('show.simplelightbox');


  

console.log(galleryItems);
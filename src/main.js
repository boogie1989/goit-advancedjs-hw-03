import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api';
import { showImages } from './js/render-functions';

const formElem = document.querySelector('form');
const imagesList = document.querySelector('.images-list');
const loader = document.querySelector('.loader');

const displayError = message => {
  iziToast.error({
    class: 'error-alert',
    message,
    messageColor: 'white',
    position: 'topRight',
    maxWidth: 432,
  });
};

const handleImageSearch = async event => {
  event.preventDefault();
  imagesList.innerHTML = '';

  const searchQuery = event.target.elements.query.value.trim();

  if (!searchQuery) {
    displayError('Please enter a search query!');
    return;
  }

  loader.classList.remove('hidden');

  try {
    const images = await searchImages(searchQuery);
    loader.classList.add('hidden');

    if (!images.hits.length) {
      displayError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      showImages(images);
    }
  } catch (error) {
    console.error(error);
    loader.classList.add('hidden');
    displayError('An error occurred while fetching images. Please try again.');
  }
};

formElem.addEventListener('submit', handleImageSearch);

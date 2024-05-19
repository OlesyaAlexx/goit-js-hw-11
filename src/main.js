import './css/styles.css';
import PixabayApi from './js/pixabay-api';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  searchform: document.querySelector('.search-form'),
  galleryconteiner: document.querySelector('.gallery'),
};

const pixabayApi = new PixabayApi();

refs.searchform.addEventListener('sabmit', onSearch);

function onSearch(event) {
  event.preventDefault();

  pixabayApi.searchQuery = event.currentTarget.elemets.searchQuery.value;
  pixabayApi.featchPhoto();
}

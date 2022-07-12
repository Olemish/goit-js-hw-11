import { createPicturesCards } from "./creatPicturesCard";
import { requestHttp } from "./api";
import Notiflix from 'notiflix';

const form = document.querySelector('#search-form');
const galleryFoto = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.button-load-more')
btnLoadMore.style.display = "none";
let movieName = '';
let page = 1;

form.addEventListener('submit', e => {
    page = 1;
    e.preventDefault();
    movieName = e.target.searchQuery.value
     getInputValue(movieName)
});

 async function getInputValue(value) {
     galleryFoto.innerHTML = '';
    if (value.trim() === "") {
        return
    }
     try {
         await requestHttp(value).then(r => {
    return r.data
         })
             .then(data => data.totalHits === 0 ? Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
                 : galleryFoto.innerHTML = createPicturesCards(data.hits))
  } catch (error) {
    console.error(error);
     }
btnLoadMore.style.display = "block";
}

btnLoadMore.addEventListener('click', () => {
    page += 1;
     requestHttp(movieName, page).then(r => {
        return r.data
    }).then(data => galleryFoto.insertAdjacentHTML('beforeend',createPicturesCards(data.hits)))
    
})

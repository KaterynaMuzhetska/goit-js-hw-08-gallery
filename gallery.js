import img from './gallery-items.js';

const target = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImageEl = document.querySelector('.lightbox__image');
const closeButtonEl = document.querySelector('[data-action="close-lightbox"]');

const galleryEl = img.map(option => {
    const markupArray = 
        `<li class="gallery__item">
            <a class="gallery__link" href="${option.original}">
                <img class="gallery__image" src="${option.preview}"
                data-source="${option.original}" alt="${option.description}" />
            </a>
        </li>`;
    return markupArray;
});

target.insertAdjacentHTML('afterBegin', galleryEl.join(' '));

target.addEventListener('click', openModalWindow);

function openModalWindow(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    event.preventDefault();
    closeButtonEl.addEventListener('click', onCloseButtonClick);
    lightboxEl.classList.add('is-open');
    lightboxImageEl.alt = event.target.alt;
    lightboxImageEl.src = event.target.dataset.source;
}

function onCloseButtonClick() {
    closeButtonEl.removeEventListener('click', onCloseButtonClick);
    lightboxEl.classList.remove('is-open');
    lightboxImageEl.src = '';
    lightboxImageEl.alt = '';
}
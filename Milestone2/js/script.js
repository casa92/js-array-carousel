const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

//CONTAINER
const bigImageContainer = document.querySelector('.big_image_container');
const imageSelection = document.querySelector('.image_selection');
console.log(bigImageContainer);
console.log(imageSelection);

//creo un ciclo for per accedere ad ogni elemento di items, poi appendo il tutto al mio container
for( let i = 0; i < items.length; i++ )  {
    let thisPath = items[i];
    let thisTitle = title[i];
    let thisText = text[i];

    let newImage = `
    <div class="single_big_image">
        <img src="${thisPath}" alt="img ${i}">
        <div class="image_text">
            <div class="title">
                <h2>${thisTitle}</h2>
            </div>
            <div class="text">
                ${thisText}
            </div>
        </div>
    </div>
    `;

    bigImageContainer.innerHTML += newImage;

    let thumbList = `
    <div class="single_selection_image">
        <img src="${thisPath}" alt="img ${i}">
    </div>
    `;

    imageSelection.innerHTML += thumbList;
}

//dare classe active a immagine, descrizione e miniatura
let activeImage = 0;
const allImages = document.getElementsByClassName('single_big_image');
const allDescription = document.getElementsByClassName('image_text');
const allThumbs = document.getElementsByClassName('single_selection_image');
allImages[activeImage].classList.add('active');
allDescription[activeImage].classList.add('active');
allThumbs[activeImage].classList.add('active');

console.log(activeImage)
console.log(allImages)
console.log(allDescription)
console.log(allThumbs)



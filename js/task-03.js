const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulRef = document.querySelector('#gallery');
ulRef.classList.add('list');
// ulRef.style.display = 'flex';
// ulRef.style.justifyContent = 'space-around';
// ulRef.style.listStyle = 'none';

const createElement = images.map((img) => {
  const liRef = document.createElement('li');
  liRef.classList.add('list__item');

  const imgRef = document.createElement('img');
  imgRef.classList.add('list__img');

  // imgRef.style.width = '350px';
  // imgRef.style.height = '200px';

  liRef.append(imgRef);

  imgRef.setAttribute('src', img.url);
  imgRef.setAttribute('alt', img.alt);

  return liRef;
});

ulRef.append(...createElement);

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
// spanRef.style.fontSize = '50px';

inputRef.addEventListener('input', (event) => {
  spanRef.style.fontSize = 'Number(event.target.value)px';
  console.log(event.target.value);
});

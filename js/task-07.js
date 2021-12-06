const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.value = 14;
spanRef.style.fontSize = inputRef.value + 'px';

inputRef.addEventListener('input', (event) => {
  spanRef.style.fontSize = event.target.value + 'px';
});

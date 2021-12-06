const inputRef = document.querySelector('#validation-input');
const numberСharacters = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', checkNumberCharacters);

function addClassValid(event) {
  event.target.classList.add('valid');
}
function removeClassInValid(event) {
  event.target.classList.remove('invalid');
}

function addClassInValid(event) {
  event.target.classList.add('invalid');
}
function removeClassValid(event) {
  event.target.classList.remove('valid');
}
function checkNumberCharacters(event) {
  const numberСharactersInInput = event.target.value.length;
  if (numberСharactersInInput === numberСharacters) {
    addClassValid(event);
    removeClassInValid(event);
  } else {
    addClassInValid(event);
    removeClassValid(event);
  }
}

const inputRef = document.querySelector('input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

btnRenderRef.addEventListener('click', () => {
  inputRef.value < 0 || inputRef.value > 100
    ? alert(`Нужно водить число от 0 к 100`)
    : boxesRef.append(...createBoxes(inputRef.value));
});
btnDestroyRef.addEventListener('click', () => {
  boxesRef.textContent = [];
  inputRef.value = '';
});

function createBoxes(amount) {
  const arrDivRef = [];
  for (let i = 0; i < amount; i += 1) {
    const randomColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    const divRef = document.createElement('div');
    divRef.style.width += 30 + i * 10 + 'px';
    divRef.style.height += 30 + i * 10 + 'px';
    divRef.style.backgroundColor = randomColor;
    arrDivRef.push(divRef);
  }
  return arrDivRef;
}

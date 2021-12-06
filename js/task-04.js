const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnincrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const spanRef = document.querySelector('#value');
let counterValue = Number(spanRef.textContent);

const increment = function () {
  counterValue += 1;
  spanRef.textContent = counterValue;
};
const decrement = function () {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnincrementRef.addEventListener('click', increment);

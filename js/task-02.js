const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
const getLi = ingredients.map((ingredient) => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
});

ulRef.append(...getLi);

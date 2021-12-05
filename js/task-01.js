const ulRef = document.querySelector('#categories');
console.dir(ulRef.children.length);

const allLiRef = document.querySelectorAll('.item');

const taskDone = allLiRef.forEach((li) => {
  console.log(li.firstElementChild.textContent);
  console.log(li.lastElementChild.children.length);
});

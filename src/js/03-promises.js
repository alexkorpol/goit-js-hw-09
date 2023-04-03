import Notiflix from 'notiflix';
const arr = document.querySelectorAll('input');
// const form = document.querySelector('.form');

let delay = arr[0];
let step = arr[1];
let amount = arr[2];
const buttonCreate = document.querySelector('button');


buttonCreate.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = 0; i <= amount.value-1; i += 1){
    const delayCount = Number(delay.value) + Number(step.value) * i;
    createPromise(i + 1, delayCount)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
     .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
});


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay )
  });
}
import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { elements: { delay, step, amount } } = event.currentTarget;
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
    }, delay);
  });
}
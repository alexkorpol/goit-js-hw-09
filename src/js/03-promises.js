const arrInput = document.querySelectorAll('input');
let delayInput = arrInput[0];
let stepInput = arrInput[1];
let amountInput = arrInput[2];
const buttonCreate = document.querySelector('button');

buttonCreate.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("delayInput.value:", delayInput.value, "stepInput.value:", stepInput.value, "amountInput.value:",
    amountInput.value);
  for (let i = 0; i <= amountInput.value; i += 1){
    const delayCount = Number(delayInput.value) + Number(stepInput.value) * i;
    // console.log("i:", i, "delayCount", delayCount);
    createPromise(i + 1, Number(delayInput.value));
  }

});

// delayInput.value = 5000;
// stepInput.value = 500;
// amountInput.value = 5;
// console.log("arrInput", arrInput);





function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      console.log(`Fulfilled promise ${position} in ${delay} ms`);
      // Fulfill
    } else {
      console.log(`Rejected promise ${position} in ${delay} ms`)
      // Reject
    }
  }
}

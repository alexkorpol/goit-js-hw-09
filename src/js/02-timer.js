import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// const selectData = document.querySelector("#datetime-picker");
// console.log("🚀 ~ file: 02-timer.js:4 ~ selectData:", selectData);
const startBtn = document.querySelector('button[data-start]');
startBtn.addEventListener("click", () => {
  console.log(options.onClose(selectedDates));
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log("==>>",selectedDates[0]);
  },
};
console.log("🚀 before options:", options);
// selectData.addEventListener('click', options);
const selectedDates = flatpickr("input#datetime-picker", { options });
// console.log("🚀 ~ file: 02-timer.js:17 ~ selectData:", selectData);
console.log("🚀 after options:", options);
console.log(options.defaultDate);
console.log(options.defaultDate.getDate());
console.log(options.defaultDate.getHours());
console.log(options.defaultDate.getMinutes());
console.log(options.defaultDate.getSeconds());
console.log(options.onClose(selectedDates));


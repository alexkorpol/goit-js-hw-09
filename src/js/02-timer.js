import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const fildOfSelectData = document.querySelector("input#datetime-picker");
const remainDays = document.querySelector('[data-days]');
const remainHours = document.querySelector('[data-hours]');
const remainMinutes = document.querySelector('[data-minutes]');
const remainSecond = document.querySelector('[data-seconds]');

document.querySelector('button[data-start]')
  .addEventListener("click", () => { });

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log("==>>", selectedDates[0]);
  }
}


flatpickr(fildOfSelectData, { options });




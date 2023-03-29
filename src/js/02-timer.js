import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputEl = document.querySelector("input#datetime-picker");
// const remainDays = document.querySelector('[data-days]');
// const remainHours = document.querySelector('[data-hours]');
// const remainMinutes = document.querySelector('[data-minutes]');
// const remainSecond = document.querySelector('[data-seconds]');
// let targetDate = null;

// document.querySelector('button[data-start]')
//   .addEventListener("click", () => {
//     targetDate = new Date(inputEl.value);
//     console.log("targetDate:", targetDate);
//   });


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDate);
    console.log(options.defaultDate);

    if(selectedDates[0] < options.defaultDate) {
      return alert("Please choose a date in the future");
    }
    alert("Date is selected correct");
  }
}


flatpickr(inputEl, { options });


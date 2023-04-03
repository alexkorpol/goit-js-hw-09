import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const inputEl = document.querySelector("input#datetime-picker");
const remainDays = document.querySelector('[data-days]');
const remainHours = document.querySelector('[data-hours]');
const remainMinutes = document.querySelector('[data-minutes]');
const remainSecond = document.querySelector('[data-seconds]');
let TIMER_DEADLINE = 0;


const buttonStart = document.querySelector('button[data-start]');
  buttonStart.disabled = true;
  buttonStart.addEventListener("click", () => {
  buttonStart.disabled = true;
  inputEl.disabled = true;

  beginCounter();
  });




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function beginCounter() {
  intervalId = setInterval(() => {
    const target = TIMER_DEADLINE - Date.now();
    if (target < 0) {
      clearInterval(intervalId);
      Notiflix.Report.success(
        'Interval expired',
        'To set a new interval date press "Continue" in this box',
        'Continue'
      );
      buttonStart.disabled = true;
      inputEl.disabled = false;
      return
    }

    const { days, hours, minutes, seconds } = convertMs(target);
      remainDays.textContent = addLeadingZero((days), 2);
      remainHours.textContent = addLeadingZero((hours),2);
      remainMinutes.textContent = addLeadingZero((minutes), 2);
    remainSecond.textContent = addLeadingZero((seconds), 2);
  }, 1000)
}

function addLeadingZero(value, i) {
  return String(value).padStart(i, "0")
}

// alert('Lets go!');
Notiflix.Report.info(
    'Hello Human!',
    'Please, choose a date in future then click on START button',
    'Let"s start!'
  );

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    TIMER_DEADLINE = selectedDates[0];

    if(selectedDates[0] < options.defaultDate) {
      return Notiflix.Report.failure(
        'Miss',
        'Please choose a date in the future',
        'Press to continue of choose a date'
      );
    }
    // alert("Date is selected correct");
    Notiflix.Report.success(
        'Successful date entry',
        'The selected date is correct. Click "Start" button to countdown',
        'Let"s go!'
      );
    buttonStart.disabled = false;
  }
}

flatpickr(inputEl, options);
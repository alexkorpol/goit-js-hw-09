const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const heading = document.createElement("h1");
let intervalId = null;
startAdjust()


startBtn.addEventListener('click', () => {
  changeStart()
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
 }
)

stopBtn.addEventListener('click', () => {
  changeStop()
  clearInterval(intervalId);

})

function startAdjust() {
  stopBtn.disabled = true;
  startBtn.classList.add("green");
  stopBtn.classList.add("red");
  startBtn.classList.add("blink");
  heading.textContent = "Press 'Start' green-blinked circle for begin random-changing background color";
  startBtn.before(heading);
};

function changeStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startBtn.classList.replace("green", "red");
  stopBtn.classList.replace("red", "green");
  stopBtn.classList.toggle("blink");
  startBtn.classList.toggle("blink");
  heading.textContent = "Press 'Stop' green-blinked circle for stop random-changing background color";
  startBtn.classList.add("move-left");
  stopBtn.classList.remove("move-right");
};

function changeStop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  startBtn.classList.replace("red", "green");
  stopBtn.classList.replace("green", "red");
  stopBtn.classList.toggle("blink");
  startBtn.classList.toggle("blink");
  heading.textContent = "Press 'Start'green-blinked circle for begin random-changing background color";
  startBtn.classList.remove("move-left");
  stopBtn.classList.add("move-right");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
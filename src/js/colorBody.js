const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

const min = 0;
const max = colors.length;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

btnStartRef.addEventListener('click', () => {
  btnStartRef.setAttribute('disabled', true);
  if (btnStartRef.disabled) {
    timerId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  }
});

btnStopRef.addEventListener('click', event => {
  if (event.target === btnStopRef) {
    clearInterval(timerId);
    btnStartRef.removeAttribute('disabled');
  }
});

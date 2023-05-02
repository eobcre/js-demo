// counter
let count = 0;
let counterElement = document.getElementById('counter');

let clickIncrement = () => {
  count++;
  counterElement.innerHTML = count;
};

let clickDecrement = () => {
  if (count > 0) {
    count--;
    counterElement.innerHTML = count;
  }
};

let clickReset = () => {
  count = 0;
  counterElement.innerHTML = count;
};

// button click Hello!
const buttonElement = document.getElementById('button');

button.addEventListener('click', () => {
  target = document.getElementById('output');
  target.innerHTML = 'Hello!';
});

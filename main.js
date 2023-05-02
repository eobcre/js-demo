// counter
let count = 0;
let counterElement = document.getElementById('counter');

let clickIncrement = () => {
  count++;
  counterElement.innerHTML = count;
};

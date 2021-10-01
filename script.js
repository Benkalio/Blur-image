const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loader = 0;
let int = setInterval(blurring, 30);

function blurring() {
  loader++;

  if (loader > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${loader}%`;

  // STACKOVERFLOW = MAP A RANGE OF NUMBERS TO ANOTHER RANGE OF NUMBERS
  loadText.style.opacity = scaler(loader, 0, 100, 1, 0);

  bg.style.filter = `blur(${scaler(loader, 0, 100, 30, 0)}px)`;
}

// STACKOVERFLOW = MAP A RANGE OF NUMBERS TO ANOTHER RANGE OF NUMBERS
const scaler = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

'use strict';

const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice");
const rollTheDice = document.querySelector(".roll-the-dice");

function getadvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      adviceNumber.innerText = data.slip.id;
      adviceText.innerText = '"' + data.slip.advice + '"';
    })
}

getadvice();

rollTheDice.addEventListener('click', () => getadvice());
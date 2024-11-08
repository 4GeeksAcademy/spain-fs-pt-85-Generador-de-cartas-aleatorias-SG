/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let symbolArray = ["♦", "♥", "♠", "♣"];
  let cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let randomSymbolArray =
    symbolArray[Math.floor(Math.random() * symbolArray.length)];
  let randomCardNumber =
    cardNumberArray[Math.floor(Math.random() * cardNumberArray.length)];

  document.getElementById("upperSymbol").textContent = randomSymbolArray;
  document.getElementById("cardNumber").textContent = randomCardNumber;
  document.getElementById("lowerSymbol").textContent = randomSymbolArray;

  if (randomSymbolArray === "♥" || randomSymbolArray === "♦") {
    document.getElementById("upperSymbol").style.color = "red";
    document.getElementById("lowerSymbol").style.color = "red";
  }
};

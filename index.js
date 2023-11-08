import mutateNumberToRoman from "./romanNumbers";
import mutateReverseRoman from "./reverseRoman";

function convertToRoman() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("resultConvert");

  const userInput = inputElement.value;
  const parsedInput = parseInt(userInput);

  if (!isNaN(parsedInput)) {
    const romanNumeral = mutateNumberToRoman(parsedInput);
    resultElement.textContent = `Roman Numeral: ${romanNumeral}`;
  } else {
    resultElement.textContent = "Please enter a valid number.";
  }
}

function convertToReverseRoman() {
  const inputElement = document.getElementById("numberRevertInput");
  const resultElement = document.getElementById("resultReverted");

  const userInput = inputElement.value;

  if (userInput === "III" || userInput === "I" || userInput === "V") {
    const romanNumeral = mutateReverseRoman(userInput);
    resultElement.textContent = `Arabic Numeral: ${romanNumeral}`;
  } else {
    resultElement.textContent = "Please enter a valid number.";
  }
}

document
  .getElementById("convertButton")
  .addEventListener("click", convertToRoman);

document
  .getElementById("revertConvertButton")
  .addEventListener("click", convertToReverseRoman);

console.log("");

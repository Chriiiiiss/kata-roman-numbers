const mutateNumberToRoman = require("./RomanNumbers");

function main([arg]) {
  if (!isNaN(arg)) {
    const number = Number(arg);
    const romanNumber = mutateNumberToRoman(number);
    console.log(`The Roman Number of ${number} is ${romanNumber}`);
  } else {
    console.error("Please provide me a number");
  }
}

main(process.argv.slice(2));

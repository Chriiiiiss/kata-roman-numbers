const mutateNumberToRoman = require("./romanNumbers");

function main([arg]) {
  if (!Number.isInteger(Number(arg)) || Number(arg) === 0) {
    console.log(`Roman didn't invented 0 and float number`);
    return -1;
  }

  if (!isNaN(arg)) {
    const number = Number(arg);
    const romanNumber = mutateNumberToRoman(number);
    console.log(`The Roman Number of ${number} is ${romanNumber}`);
    return 1;
  } else {
    console.error("Please provide me a number");
    return -1;
  }
}

main(process.argv.slice(2));

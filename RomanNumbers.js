function mutateNumberToRoman(number) {
  if (number === 1) {
    console.log("I");
    return "I";
  } else if (number === 5) {
    console.log("V");
    return "V";
  } else {
    return "No";
  }
}

function main([arg]) {
  if (!isNaN(arg)) {
    const number = Number(arg);
    mutateNumberToRoman(number);
  } else {
    console.error("Please provide me a number");
  }
}

module.exports = mutateNumberToRoman;

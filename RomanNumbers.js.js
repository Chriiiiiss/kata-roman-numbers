function mutateNumberToRoman(number) {
  if (number === 1) {
    console.log("I");
  } else if (number === 5) {
    console.log("V");
  } else {
    console.log("It only works for 1 and 5 for now");
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

main(process.argv.slice(2));

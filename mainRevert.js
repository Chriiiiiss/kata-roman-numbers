const mutateReverseRoman = require("./reverseRoman");

function main([arg]) {
  if ((arg.length > 5 && arg === "II") || arg === "IV") {
    console.log(`Not Implemented for now`);
    return -1;
  }

  if (typeof arg === "string") {
    const arabicNumber = mutateReverseRoman(arg);
    console.log(`The Arabic Number of ${arg} is ${arabicNumber}`);
    return 1;
  } else {
    console.error("Please provide me a roman number");
    return -1;
  }
}

main(process.argv.slice(2));

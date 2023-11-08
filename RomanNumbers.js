function mutateNumberToRoman(number) {
  let result = "";

  while (number > 0) {
    if (number >=10){
      result = result + "X".repeat(number/10); 
      number = number%10;

    }
    else if (number>=9){
      result = result + "IX";
      number = number%9;

    } 
    else if (number>=5){
      result = result + "V";
      number = number%5;

    } 
    else if (number>=4){
      result = result + "IV";
      number = number%4;

    }
    else if (number>=1){
      result = result + "I".repeat(number/1);
      number = number%1;
    }
  }
  return result;
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
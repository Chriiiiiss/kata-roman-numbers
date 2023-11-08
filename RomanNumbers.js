function mutateNumberToRoman(number) {
  let result = "";

  while (number > 0) {
    if (number >= 1000) {
      result = result + "M".repeat(number / 1000);
      number = number % 1000;
    } else if (number >= 900) {
      result = result + "CM";
      number = number % 900;
    } else if (number >= 500) {
      result = result + "D";
      number = number % 500;
    } else if (number >= 400) {
      result = result + "CD";
      number = number % 400;
    } else if (number >= 100) {
      result = result + "C".repeat(number / 100);
      number = number % 100;
    } else if (number >= 90) {
      result = result + "XC";
      number = number % 90;
    } else if (number >= 50) {
      result = result + "L";
      number = number % 50;
    } else if (number >= 40) {
      result = result + "XL";
      number = number % 40;
    } else if (number >= 10) {
      result = result + "X".repeat(number / 10);
      number = number % 10;
    } else if (number >= 9) {
      result = result + "IX";
      number = number % 9;
    } else if (number >= 5) {
      result = result + "V";
      number = number % 5;
    } else if (number >= 4) {
      result = result + "IV";
      number = number % 4;
    } else if (number >= 1) {
      result = result + "I".repeat(number / 1);
      number = number % 1;
    }
  }
  return result;
}

module.exports = mutateNumberToRoman;

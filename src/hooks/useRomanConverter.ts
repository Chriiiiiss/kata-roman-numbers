export function useRomanConverter(number: number) {
  let romanoNumbers = "";

  while (number > 0) {
    if (number >= 1000) {
      romanoNumbers = romanoNumbers + "M".repeat(number / 1000);
      number = number % 1000;
    } else if (number >= 900) {
      romanoNumbers = romanoNumbers + "CM";
      number = number % 900;
    } else if (number >= 500) {
      romanoNumbers = romanoNumbers + "D";
      number = number % 500;
    } else if (number >= 400) {
      romanoNumbers = romanoNumbers + "CD";
      number = number % 400;
    } else if (number >= 100) {
      romanoNumbers = romanoNumbers + "C".repeat(number / 100);
      number = number % 100;
    } else if (number >= 90) {
      romanoNumbers = romanoNumbers + "XC";
      number = number % 90;
    } else if (number >= 50) {
      romanoNumbers = romanoNumbers + "L";
      number = number % 50;
    } else if (number >= 40) {
      romanoNumbers = romanoNumbers + "XL";
      number = number % 40;
    } else if (number >= 10) {
      romanoNumbers = romanoNumbers + "X".repeat(number / 10);
      number = number % 10;
    } else if (number >= 9) {
      romanoNumbers = romanoNumbers + "IX";
      number = number % 9;
    } else if (number >= 5) {
      romanoNumbers = romanoNumbers + "V";
      number = number % 5;
    } else if (number >= 4) {
      romanoNumbers = romanoNumbers + "IV";
      number = number % 4;
    } else if (number >= 1) {
      romanoNumbers = romanoNumbers + "I".repeat(number / 1);
      number = number % 1;
    }
  }
  return romanoNumbers;
}

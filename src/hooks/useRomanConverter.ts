type TRomanValue = Record<string, number>;

const romanValues: TRomanValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function useRomanConverter(userInput: number | string) {
  let romanoNumbers = "";

  if (!isNaN(Number(userInput)) && !Number.isInteger(Number(userInput))) {
    return;
  }

  let userInputFiltered = isNaN(Number(userInput))
    ? String(userInput).toUpperCase()
    : Number(userInput);

  if (typeof userInputFiltered === "string") {
    let total = 0;
    let previousValue = 0;

    for (let i = userInputFiltered.length - 1; i >= 0; i--) {
      const currentRomanValue = userInputFiltered[i];
      const arabicValue = romanValues[currentRomanValue];

      if (arabicValue >= previousValue) {
        total += arabicValue;
      } else {
        total -= arabicValue;
      }
      previousValue = arabicValue;
    }

    return `${total}`;
  } else {
    while (userInputFiltered > 0) {
      if (userInputFiltered >= 1000) {
        romanoNumbers = romanoNumbers + "M".repeat(userInputFiltered / 1000);
        userInputFiltered = userInputFiltered % 1000;
      } else if (userInputFiltered >= 900) {
        romanoNumbers = romanoNumbers + "CM";
        userInputFiltered = userInputFiltered % 900;
      } else if (userInputFiltered >= 500) {
        romanoNumbers = romanoNumbers + "D";
        userInputFiltered = userInputFiltered % 500;
      } else if (userInputFiltered >= 400) {
        romanoNumbers = romanoNumbers + "CD";
        userInputFiltered = userInputFiltered % 400;
      } else if (userInputFiltered >= 100) {
        romanoNumbers = romanoNumbers + "C".repeat(userInputFiltered / 100);
        userInputFiltered = userInputFiltered % 100;
      } else if (userInputFiltered >= 90) {
        romanoNumbers = romanoNumbers + "XC";
        userInputFiltered = userInputFiltered % 90;
      } else if (userInputFiltered >= 50) {
        romanoNumbers = romanoNumbers + "L";
        userInputFiltered = userInputFiltered % 50;
      } else if (userInputFiltered >= 40) {
        romanoNumbers = romanoNumbers + "XL";
        userInputFiltered = userInputFiltered % 40;
      } else if (userInputFiltered >= 10) {
        romanoNumbers = romanoNumbers + "X".repeat(userInputFiltered / 10);
        userInputFiltered = userInputFiltered % 10;
      } else if (userInputFiltered >= 9) {
        romanoNumbers = romanoNumbers + "IX";
        userInputFiltered = userInputFiltered % 9;
      } else if (userInputFiltered >= 5) {
        romanoNumbers = romanoNumbers + "V";
        userInputFiltered = userInputFiltered % 5;
      } else if (userInputFiltered >= 4) {
        romanoNumbers = romanoNumbers + "IV";
        userInputFiltered = userInputFiltered % 4;
      } else if (userInputFiltered >= 1) {
        romanoNumbers = romanoNumbers + "I".repeat(userInputFiltered / 1);
        userInputFiltered = userInputFiltered % 1;
      }
    }
  }
  return romanoNumbers;
}

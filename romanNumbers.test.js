const mutateNumberToRoman = require("./RomanNumbers");

test("should transform 1 to roman I", () => {
  expect(mutateNumberToRoman(1)).toBe("I");
});

test("should transform 5 to roman V", () => {
  expect(mutateNumberToRoman(5)).toBe("V");
});

test("should transform 4 to roman IV", () => {
  expect(mutateNumberToRoman(4)).toBe("IV");
});

test("should transform 9 to roman IX", () => {
  expect(mutateNumberToRoman(9)).toBe("IX");
});

test("should transform 8 to roman IX", () => {
  expect(mutateNumberToRoman(9)).toBe("IX");
});

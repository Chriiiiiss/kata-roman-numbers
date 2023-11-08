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

test("should transform 7 to roman IX", () => {
  expect(mutateNumberToRoman(9)).toBe("IX");
});

test("should transform 50 to roman L", () => {
  expect(mutateNumberToRoman(50)).toBe("L");
});

test("should transform 40 to roman XL", () => {
  expect(mutateNumberToRoman(40)).toBe("L");
});

test("should transform 60 to roman XL", () => {
  expect(mutateNumberToRoman(60)).toBe("LX");
});

test("should transform 100 to roman C", () => {
  expect(mutateNumberToRoman(100)).toBe("C");
});

test("should transform 500 to roman D", () => {
  expect(mutateNumberToRoman(500)).toBe("D");
});

test("should transform 1000 to roman M", () => {
  expect(mutateNumberToRoman(500)).toBe("M");
});

test("should transform 634 to roman DCXXXIV", () => {
  expect(mutateNumberToRoman(634)).toBe("DCXXXIV");
});

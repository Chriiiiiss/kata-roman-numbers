const AVAILABLE_CHARS = ["I", "V", "X", "L", "C", "D", "M", "O"];

export function checkInputChars(inputStr: string): boolean {
  for (const char of inputStr) {
    if (!AVAILABLE_CHARS.includes(char)) {
      return false;
    }
  }

  if (!inputStr && isNaN(Number(inputStr))) {
    return false;
  }

  if (!isNaN(Number(inputStr)) && !Number.isInteger(Number(inputStr))) {
    return false;
  }
  return true;
}

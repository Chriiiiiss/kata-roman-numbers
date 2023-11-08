const AVAILABLE_CHARS = ["I", "V", "X", "L", "C", "D", "M"];

export function checkInputChars(inputStr: string): boolean {
  for (const char of inputStr) {
    if (!AVAILABLE_CHARS.includes(char)) {
      return false;
    }
  }
  return true;
}

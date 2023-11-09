import { useFetchToRoman } from "./useFetchToRoman";

export const useRomanConverter = (userInput: number | string) => {
  const userInputFiltered = isNaN(Number(userInput))
    ? String(userInput).toUpperCase()
    : Number(userInput);

  const { data, isLoading } = useFetchToRoman(userInputFiltered);

  if (data) {
    return data.roman;
  } else if (isLoading) {
    return "Loading...";
  } else {
    return "";
  }
};

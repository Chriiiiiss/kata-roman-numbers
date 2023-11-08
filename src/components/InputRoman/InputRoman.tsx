import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRomanConverter } from "../../hooks/useRomanConverter";
import { checkInputChars } from "../../utils/input";

const Card = styled.div`
  background-color: blue;
`;

const ResultPlaceholder = styled.h1`
  color: red;
`;

function InputRoman() {
  const [userInput, setUserInput] = useState("");
  const [debouncedUserInputValue, setDebouncedUserInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value)) || checkInputChars(value.toUpperCase())) {
      setUserInput(value);
      setInputError(false);
    } else {
      setUserInput(value);
      setInputError(true);
    }
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedUserInputValue(userInput);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [userInput]);

  const romanoConvertedNumber = useRomanConverter(
    Number(debouncedUserInputValue)
  );

  return (
    <Card>
      <input
        placeholder="from 1 to 3999"
        value={userInput}
        onChange={handleInputChange}
      />
      {inputError ? (
        <p>Error</p>
      ) : (
        <ResultPlaceholder>{romanoConvertedNumber}</ResultPlaceholder>
      )}
    </Card>
  );
}

export default InputRoman;

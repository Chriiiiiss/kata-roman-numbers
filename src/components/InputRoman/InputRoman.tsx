import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRomanConverter } from "../../hooks/useRomanConverter";

const Card = styled.div`
  background-color: blue;
`;

const ResultPlaceholder = styled.h1`
  color: red;
`;

function InputRoman() {
  const [userInput, setUserInput] = useState("");
  const [debouncedUserInputValue, setDebouncedUserInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
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
      <ResultPlaceholder>{romanoConvertedNumber}</ResultPlaceholder>
    </Card>
  );
}

export default InputRoman;

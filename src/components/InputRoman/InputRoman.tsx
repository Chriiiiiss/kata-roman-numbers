import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRomanConverter } from "../../hooks/useRomanConverter";
import { checkInputChars } from "../../utils/input";
import { MAX_NUMBER } from "../../utils/constants";

const CardWrapper = styled.div`
  height:100%;
  padding:50px 100px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.50);
  box-shadow: 16px 16px 31px 0px rgba(0, 0, 0, 0.25);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  input{
    padding: 10px;
    border: 2px solid transparent;
    background-color: rgba(255, 255, 255, 0.50);
    color: #000000;
    border-radius: 16px;
    box-shadow:0px 0px 30px rgba(255, 255, 255, 0.30);
    text-align: center;

  }
  input:focus {
    outline: none;
    border: 2px solid #FFF;
  }
`;

const ResultPlaceholder = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

function InputRoman() {
  const [userInput, setUserInput] = useState("");
  const [debouncedUserInputValue, setDebouncedUserInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    console.log(
      (!isNaN(Number(value)) && Number(value) < MAX_NUMBER) ||
        checkInputChars(value.toUpperCase())
    );

    if (
      (!isNaN(Number(value)) && Number(value) < MAX_NUMBER) ||
      checkInputChars(value.toUpperCase())
    ) {
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

  const romanoConvertedNumber = useRomanConverter(debouncedUserInputValue);

  return (
    <CardWrapper>
        <Card>
          <h2>Convert a Roman number to an Arabic number</h2>
        <input
          placeholder="from 1 to 3999"
          value={userInput}
          onChange={handleInputChange}
        />
      {inputError ? (
        <ResultPlaceholder>Error</ResultPlaceholder>
      ) : (
          <ResultPlaceholder>{romanoConvertedNumber}</ResultPlaceholder>
      )}
      </Card>
    </CardWrapper>
  );
}

export default InputRoman;

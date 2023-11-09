import { useEffect, useState } from "react";
import { IGetRomanObj, getConvertToRoman } from "../api/convertRomanApi";

export function useFetchToRoman(userInput: number | string) {
  const [data, setData] = useState<IGetRomanObj | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    if (userInput && typeof userInput === "number") {
      getConvertToRoman(userInput)
        .then((response) => {
          if (isMounted) {
            setData(response);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err);
            setLoading(false);
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [userInput]);

  return { data, isLoading, error };
}

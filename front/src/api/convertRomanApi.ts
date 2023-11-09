export interface IGetRomanObj {
  roman: string;
}

export const getConvertToRoman = async (
  number: number
): Promise<IGetRomanObj> => {
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  if (!apiBaseUrl) {
    throw new Error("Missing API_URL");
  }

  const response = await fetch(`${apiBaseUrl}api/roman/${number}`);

  if (!response.ok) {
    throw new Error("Internal Server Error");
  }

  return await response.json();
};

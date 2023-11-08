import { renderHook } from "@testing-library/react-hooks";
import { useRomanConverter } from "../hooks/useRomanConverter";

test("should render the roman hook with a one", () => {
  const { result } = renderHook(() => useRomanConverter(1));

  expect(result.current).toBe("I");
});

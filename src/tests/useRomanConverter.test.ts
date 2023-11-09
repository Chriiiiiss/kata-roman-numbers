import { renderHook } from "@testing-library/react-hooks";
import { useRomanConverter } from "../hooks/useRomanConverter";
import { expect, describe, it } from "vitest";

describe("useRomanConverter", () => {
  it("should render the roman hook with a one", () => {
    const result = useRomanConverter(1);

    expect(result).toBe("I");
  });

  it("should render a V with a 5", () => {
    const result = useRomanConverter(5);

    expect(result).toBe("V");
  });

  it("should render a X with a 10", () => {
    const result = useRomanConverter(10);

    expect(result).toBe("X");
  });

  it("should render a IX with a 9", () => {
    const result = useRomanConverter(9);

    expect(result).toBe("IX");
  });

  it("should render a IV with a 4", () => {
    const result = useRomanConverter(4);

    expect(result).toBe("IV");
  });

  it("should render a XL with a 40", () => {
    const result = useRomanConverter(40);

    expect(result).toBe("XL");
  });

  it("should render a XLIX with a 49", () => {
    const result = useRomanConverter(49);

    expect(result).toBe("XLIX");
  });

  it("should render a L with a 50", () => {
    const result = useRomanConverter(50);

    expect(result).toBe("L");
  });

  it("should render a C with a 100", () => {
    const result = useRomanConverter(100);

    expect(result).toBe("C");
  });

  it("should render a D with a 500", () => {
    const result = useRomanConverter(500);

    expect(result).toBe("D");
  });

  it("should render a M with a 1000", () => {
    const result = useRomanConverter(1000);

    expect(result).toBe("M");
  });
});

describe("useRomanConverterInverted", () => {
  it("should render a 1 with a I", () => {
    const result = useRomanConverter("I");

    expect(result).toBe("1");
  });

  it("should render a 3 with a III", () => {
    const result = useRomanConverter("III");

    expect(result).toBe("3");
  });

  it("should render a 5 with a V", () => {
    const result = useRomanConverter("V");

    expect(result).toBe("5");
  });

  it("should render a 10 with a X", () => {
    const result = useRomanConverter("X");

    expect(result).toBe("10");
  });

  it("should render a 20 with a XX", () => {
    const result = useRomanConverter("XX");

    expect(result).toBe("20");
  });

  it("should render a 49 with a XLIX", () => {
    const result = useRomanConverter("XLIX");

    expect(result).toBe("49");
  });

  it("should render 50 with a L", () => {
    const result = useRomanConverter("L");

    expect(result).toBe("50");
  });

  it("should render a 100 with a C", () => {
    const result = useRomanConverter("C");

    expect(result).toBe("100");
  });

  it("should render a 500 with a D", () => {
    const result = useRomanConverter("D");

    expect(result).toBe("500");
  });

  it("should render a 1000 with a M", () => {
    const result = useRomanConverter("M");

    expect(result).toBe("1000");
  });
});

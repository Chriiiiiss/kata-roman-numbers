export default function mutateReverseRoman(arg) {
  console.log(arg);
  if (arg === "III") {
    return "3";
  } else if (arg === "I") {
    return "1";
  } else if (arg === "V") {
    return "5";
  } else {
    return "Sorry currently not implemented";
  }
}

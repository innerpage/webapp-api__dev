export const Helper__Generate__4DigitCode = () => {
  let code_4Digit: number = Math.floor(1000 + Math.random() * 9000);
  return code_4Digit;
};

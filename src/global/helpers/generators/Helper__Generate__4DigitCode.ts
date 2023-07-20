export const Helper__Generate__4DigitCode = () => {
  let code__4Digit: number = Math.floor(1000 + Math.random() * 9000);
  return code__4Digit;
};

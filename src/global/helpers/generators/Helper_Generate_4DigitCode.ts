export const Helper_Generate_4DigitCode = () => {
  let code_4Digit: number = Math.floor(1000 + Math.random() * 9000);
  return code_4Digit;
};

export const GenerateFourDigitCodeHelper = () => {
  let fourDigitCode: number = Math.floor(1000 + Math.random() * 9000);
  return fourDigitCode;
};

export const Helper__Generate__Code_4Digits = () => {
  let code_4Digits: number = Math.floor(1000 + Math.random() * 9000);
  return code_4Digits;
};

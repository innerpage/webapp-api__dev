export const helper_Account_GenerateEmailVerificationCode = () => {
  let code_EmailVerification: number = Math.floor(1000 + Math.random() * 9000);
  return code_EmailVerification;
};

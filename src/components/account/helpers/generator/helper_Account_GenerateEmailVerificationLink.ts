import { baseUrlConfig } from "../../../../config";

export const helper_Account_GenerateEmailVerificationLink = (
  code_EmailVerification: string
) => {
  let link_EmailVerification: string = `${baseUrlConfig.url}/email-verification/${code_EmailVerification}`;
  return link_EmailVerification;
};

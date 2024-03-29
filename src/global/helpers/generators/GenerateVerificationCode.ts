import { v4 as uuidv4 } from "uuid";

export const GenerateVerificationCode = async () => {
  let verificationCode: string = await uuidv4();
  return verificationCode;
};

import * as argon from "argon2";

export const verifyPasswordHash = async (
  hashedPassword: string,
  unHashedPassword: string
) => {
  let isPasswordValid: boolean = await argon.verify(
    hashedPassword,
    unHashedPassword
  );

  return isPasswordValid;
};

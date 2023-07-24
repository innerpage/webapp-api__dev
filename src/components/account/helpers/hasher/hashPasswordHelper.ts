import * as argon from "argon2";

export const hashPasswordHelper = async (password: string) => {
  let hashedPassword: string = await argon.hash(password, {
    type: argon.argon2id,
  });
  return hashedPassword;
};

import * as argon from "argon2";

export const hashPassword = async (password: string) => {
  let hashed_Password: string = await argon.hash(password, {
    type: argon.argon2id,
  });
  return hashed_Password;
};

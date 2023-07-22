import * as argon from "argon2";

export const helper_Account_Verify_Password_Hash = async (
  password_Hashed: string,
  password_Unhashed: string
) => {
  let isValid_Password: boolean = await argon.verify(
    password_Hashed,
    password_Unhashed
  );

  return isValid_Password;
};
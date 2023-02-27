import { dal_GetAccount_ByEmail } from "../../dals";

export const helper_Check_Account_Existence = async (email: string) => {
  email = email.toLowerCase();
  email = email.trim();

  let account = await dal_GetAccount_ByEmail(email);

  if (account) {
    return true;
  } else {
    return false;
  }
};

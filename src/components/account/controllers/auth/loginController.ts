import { Request, Response } from "express";
import { loginHelper } from "../../helpers";
import { readAccountByEmail } from "../../dals";
import { verifyPasswordHashHelper } from "../../helpers";

export const loginController = async (req: Request, res: Response) => {
  let { email, password } = res.locals;
  let account: any = await readAccountByEmail(email);

  let isValid_Password: boolean = await verifyPasswordHashHelper(
    account?.dataValues.password,
    password
  );

  if (!isValid_Password) {
    console.log(`${email} password IS_NOT_VALID`);
    return res.status(400).json({
      success: false,
      message: "❌ Invalid password",
    });
  }
  console.log(`${email} password IS_VALID`);
  res.locals.accountId = account?.dataValues.id;
  loginHelper(req, res.locals.accountId);

  let payload_Account_Login = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Logged in",
    payload: payload_Account_Login,
  });
};

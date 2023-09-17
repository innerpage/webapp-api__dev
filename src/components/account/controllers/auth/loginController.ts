import { Request, Response } from "express";
import { loginHelper } from "../../helpers";
import { readAccountByEmail } from "../../dals";
import { verifyPasswordHashHelper } from "../../helpers";

export const loginController = async (req: Request, res: Response) => {
  let { email, password } = res.locals;
  let account: any = await readAccountByEmail(email);

  let isPasswordValid: boolean = await verifyPasswordHashHelper(
    account?.dataValues.password,
    password
  );

  if (!isPasswordValid) {
    console.log(`${email} password is not valid`);
    return res.status(400).json({
      success: false,
      message: "❌ Invalid password",
    });
  }
  console.log(`${email} password is valid`);
  res.locals.accountId = account?.dataValues.id;
  loginHelper(req, res, res.locals.accountId);

  let loginResponseObject = {
    firstName: account.first_name,
    lastName: account.last_name,
    email: account.email,
    isEmailVerified: account.is_email_verified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Logged in",
    payload: loginResponseObject,
  });
};

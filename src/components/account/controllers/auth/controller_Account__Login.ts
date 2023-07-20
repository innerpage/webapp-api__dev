import { Request, Response } from "express";
import { helper_Account__Login } from "../../helpers";
import { dal_Account__Read__By_Email } from "../../dals";
import { helper_Account__Verify__PasswordHash } from "../../helpers";

export const controller_Account__Login = async (
  req: Request,
  res: Response
) => {
  let { email, password } = res.locals;
  let account: any = await dal_Account__Read__By_Email(email);

  let isValid_Password: boolean = await helper_Account__Verify__PasswordHash(
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
  res.locals.id_Account = account?.dataValues.id;
  helper_Account__Login(req, res.locals.id_Account);

  let payload_AccountLogin = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isPublisher: account.is_publisher,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Logged in",
    payload: payload_AccountLogin,
  });
};
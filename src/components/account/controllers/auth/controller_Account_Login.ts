import { Request, Response } from "express";
import { helper_Account_Login } from "../../helpers";
import { dal_Account_Read_ByEmail } from "../../dals";
import { helper_Account_VerifyPasswordHash } from "../../helpers";

export const controller_Account_Login = async (req: Request, res: Response) => {
  let { email, password } = res.locals;
  let account = await dal_Account_Read_ByEmail(email);

  let isValid_Password: boolean = await helper_Account_VerifyPasswordHash(
    account?.dataValues.password,
    password
  );

  if (!isValid_Password) {
    console.log(`${email} password IS_NOT_VALID`);
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }
  console.log(`${email} password IS_VALID`);
  res.locals.id_Account = account?.dataValues.id;
  helper_Account_Login(req, res.locals.id_Account);

  let payload_AccountLogin = { isActive_Session: true };

  return res.status(200).json({
    success: true,
    message: "Logged in",
    payload: payload_AccountLogin,
  });
};

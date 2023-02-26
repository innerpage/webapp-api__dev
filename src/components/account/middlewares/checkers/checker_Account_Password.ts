import { Request, Response, NextFunction } from "express";
import { dal_GetAccount_ByEmail } from "../../dals";
import * as argon from "argon2";

export const checker_Account_Password = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = res.locals.formatted_Login_Inputs;
  let account = await dal_GetAccount_ByEmail(email);

  let isValid_Password: boolean = await argon.verify(
    account?.dataValues.password,
    password
  );

  if (!isValid_Password) {
    console.log(`${email} password IS_NOT_VALID`);
    return res.status(200).json({
      success: false,
      message: `${email} password is not valid`,
    });
  }

  console.log(`${email} password IS_VALID`);
  res.locals.id_Account = account?.dataValues.id;
  next();
};

import { Request, Response } from "express";
import { login } from "../../helpers";
import { readAccountById } from "../../dals";
import { verifyPasswordHash } from "../../helpers";
import { Var } from "../../../../global/var";

export const loginController = async (req: Request, res: Response) => {
  let { email, password } = res.locals;
  let account: any = await readAccountByEmail(email);

  if (!account.dataValues.password) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid password`,
    });
  }

  let isPasswordValid: boolean = await verifyPasswordHash(
    account?.dataValues.password,
    password
  );

  if (!isPasswordValid) {
    console.log(`${Var.app.emoji.failure} ${email} password is not valid`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid password`,
    });
  }
  console.log(`${Var.app.emoji.success} ${email} password is valid`);
  res.locals.accountId = account?.dataValues.id;
  login(req, res, res.locals.accountId);

  let responseData = {
    name: account.name,
    email: account.email,
    isEmailVerified: account.is_email_verified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Logged in`,
    payload: responseData,
  });
};

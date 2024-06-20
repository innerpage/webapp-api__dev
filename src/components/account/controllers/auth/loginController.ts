import { Request, Response } from "express";
import { login } from "../../helpers";
import { readAccountByUserName } from "../../dals";
import { verifyPasswordHash } from "../../helpers";
import { Var } from "../../../../global/var";

export const loginController = async (req: Request, res: Response) => {
  let { userName, password } = res.locals;
  let account: any = await readAccountByUserName(userName);

  if (!account) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Account not found`,
    });
  }

  let isPasswordValid: boolean = await verifyPasswordHash(
    account?.dataValues.password,
    password
  );

  if (!isPasswordValid) {
    console.log(`${Var.app.emoji.failure} password is not valid`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid password`,
    });
  }
  console.log(`${Var.app.emoji.success} password is valid`);
  res.locals.accountId = account?.dataValues.id;
  login(req, res, res.locals.accountId);

  let responseData = {
    userName: account?.dataValues.userName,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Logged in`,
    payload: responseData,
  });
};

import { Request, Response } from "express";
import { readAccountById } from "../../dals";
import { Var } from "../../../../global/var";

export const getAccountDetailsController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);
  if (!account) {
    console.log(`${Var.app.emoji.failure} Account does not exist`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Account does not exist`,
    });
  }

  let responseData: any = {
    name: account.name,
    email: account.email,
    isEmailVerified: account.is_email_verified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Account details fetched`,
    payload: responseData,
  });
};

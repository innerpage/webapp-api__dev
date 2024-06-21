import { Request, Response } from "express";
import {
  readAccountById,
  writeNewUserName,
  writeNewPassword,
} from "../../dals";
import { hashPassword } from "../../helpers";
import { Var } from "../../../../global/var";

export const updateAccountController = async (req: Request, res: Response) => {
  let account: any = await readAccountById(res.locals.accountId);
  if (!account) {
    return res.status(400).json({
      success: false,
      message: `Could not find account`,
    });
  }

  let accountUpdateReturnData: any;

  if (res.locals.filter === "userName") {
    accountUpdateReturnData = await writeNewUserName(
      res.locals.accountId,
      res.locals.value
    );
  } else if (res.locals.filter === "password") {
    let newHashedPassword: string = await hashPassword(res.locals.value);
    accountUpdateReturnData = await writeNewPassword(
      res.locals.accountId,
      newHashedPassword
    );
  }
  console.log(accountUpdateReturnData.message);
  if (!accountUpdateReturnData.success) {
    console.log(
      `${Var.app.emoji.failure} Failed to update ${res.locals.filter}`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Failed to update ${res.locals.filter}`,
    });
  }

  return res.status(200).json({
    success: accountUpdateReturnData.success,
    message: accountUpdateReturnData.message,
    payload: {},
  });
};

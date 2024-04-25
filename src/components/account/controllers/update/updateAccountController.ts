import { Request, Response } from "express";
import {
  readAccountById,
  writeNewEmail,
  writeNewName,
  writeNewPassword,
} from "../../dals";
import {
  hashPasswordHelper,
  mailAccountChangeConfirmationHelper,
} from "../../helpers";

export const updateAccountController = async (req: Request, res: Response) => {
  let account: any = await readAccountById(res.locals.accountId);
  let email: string = account.dataValues.email;

  let accountUpdateReturnObject: any;

  console.log(`email              : ${email}`);
  console.log(`res.locals.filter  : ${res.locals.filter}`);
  console.log(`res.locals.value   : ${res.locals.value}`);

  if (res.locals.filter === "name") {
    accountUpdateReturnObject = await writeNewName(email, res.locals.value);
  } else if (res.locals.filter === "email") {
    accountUpdateReturnObject = await writeNewEmail(email, res.locals.value);
  } else if (res.locals.filter === "password") {
    let newHashedPassword: string = await hashPasswordHelper(res.locals.value);
    accountUpdateReturnObject = await writeNewPassword(
      email,
      newHashedPassword
    );
  }

  console.log(accountUpdateReturnObject.message);
  if (!accountUpdateReturnObject.success) {
    console.log(`❌ Failed to update ${res.locals.filter}`);
    return res.status(400).json({
      success: false,
      message: `❌ Failed to update ${res.locals.filter}`,
    });
  }

  let mailAccountChangeConfirmationReturnObject: any =
    mailAccountChangeConfirmationHelper(
      email,
      res.locals.filter,
      account.dataValues.name.split(" ")[0]
    );
  console.log(mailAccountChangeConfirmationReturnObject.message);

  return res.status(200).json({
    success: accountUpdateReturnObject.success,
    message: accountUpdateReturnObject.message,
    payload: {},
  });
};

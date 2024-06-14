import { Request, Response } from "express";
import {
  readAccountById,
  writeNewEmail,
  writeNewName,
  writeNewPassword,
} from "../../dals";
import { hashPassword, mailAccountChangeConfirmation } from "../../helpers";
import { GenerateVerificationCode } from "../../../../global/helpers";
import { Var } from "../../../../global/var";
import { mailVerificationLink } from "../../helpers";

export const updateAccountController = async (req: Request, res: Response) => {
  let account: any = await readAccountById(res.locals.accountId);
  let email: string = account.dataValues.email;

  let accountUpdateReturnData: any;

  if (res.locals.filter === "name") {
    accountUpdateReturnData = await writeNewName(email, res.locals.value);
  } else if (res.locals.filter === "email") {
    let verificationCode: string = await GenerateVerificationCode();
    accountUpdateReturnData = await writeNewEmail(
      email,
      res.locals.value,
      verificationCode
    );
    const verificationLink = `${res.locals.origin}/verify/email/${verificationCode}`;
    const mailVerificationLinkReturnData = await mailVerificationLink(
      account.name.split(" ")[0],
      email,
      verificationLink,
      "emailVerificationLink"
    );
    console.log(mailVerificationLinkReturnData.message);
    if (!mailVerificationLinkReturnData.success) {
      return res.status(400).json({
        success: false,
        message: mailVerificationLinkReturnData.message,
        payload: {},
      });
    }
  } else if (res.locals.filter === "password") {
    let newHashedPassword: string = await hashPassword(res.locals.value);
    accountUpdateReturnData = await writeNewPassword(email, newHashedPassword);
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

  let mailAccountChangeConfirmationReturnData: any =
    mailAccountChangeConfirmation(
      email,
      res.locals.filter,
      account.dataValues.name.split(" ")[0]
    );
  console.log(mailAccountChangeConfirmationReturnData.message);

  return res.status(200).json({
    success: accountUpdateReturnData.success,
    message: accountUpdateReturnData.message,
    payload: {},
  });
};

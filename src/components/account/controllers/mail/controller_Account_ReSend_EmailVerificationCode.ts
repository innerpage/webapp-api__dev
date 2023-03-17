import { Request, Response } from "express";
import {
  dal_Account_Write_EmailVerification_Code,
  dal_Account_Read_ByAccountId,
} from "../../dals";
import { helper_Account_MailEmailVerificationCode } from "../../helpers";
import { Helper_Generate_4DigitCode } from "../../../../global/helpers";
import { Var_Publisher } from "../../../../global/vars";

export const controller_Account_ReSend_EmailVerificationCode = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);
  let code_EmailVerification: number = await Helper_Generate_4DigitCode();

  let returnObj_Write_EmailVerificationCode: any =
    await dal_Account_Write_EmailVerification_Code(
      res.locals.id_Account,
      code_EmailVerification
    );
  console.log(returnObj_Write_EmailVerificationCode.message);
  console.log(returnObj_Write_EmailVerificationCode.payload);

  if (!returnObj_Write_EmailVerificationCode.success) {
    return res.status(400).json({
      success: false,
      message: "Could not save email verification code",
    });
  }

  let returnObj_MailEmailVerificationCode: any =
    await helper_Account_MailEmailVerificationCode(
      account.first_name,
      account.email,
      code_EmailVerification,
      Var_Publisher.url_Website,
      Var_Publisher.name_Product,
      Var_Publisher.name_Business,
      Var_Publisher.address_Business,
      Var_Publisher.email_Support
    );
  console.log(returnObj_MailEmailVerificationCode.message);
  console.log(returnObj_MailEmailVerificationCode.payload);

  res.status(200).json({
    success: true,
    message: "Email verification code sent",
  });
};

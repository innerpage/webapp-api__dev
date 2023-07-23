import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_By_Id_Account } from "../../../../components/account/dals";

export const BlockDisabledAccountByAccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account_Read_By_Id_Account(res.locals.accountId);

  if (account.is_disabled) {
    console.log(`❌ ${res.locals.accountId} is disabled`);
    return res.status(200).json({
      success: false,
      message: "❌ Your account is disabled",
    });
  }

  console.log(`✅ ${res.locals.accountId} is not disabled`);
  next();
};

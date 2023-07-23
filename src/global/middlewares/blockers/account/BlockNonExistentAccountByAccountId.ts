import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_By_Id_Account } from "../../../../components/account/dals";

export const BlockNonExistentAccountByAccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_Read_By_Id_Account(res.locals.accountId);

  if (!account) {
    console.log(`❌ ${res.locals.accountId} is not registered`);
    return res.status(200).json({
      success: false,
      message: "❌ You are not registered",
    });
  }

  console.log(`✅ ${res.locals.accountId} is registered`);
  next();
};

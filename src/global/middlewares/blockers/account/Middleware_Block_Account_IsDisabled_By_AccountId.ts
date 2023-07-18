import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_ByAccountId } from "../../../../components/account/dals";

export const Middleware_Block_Account_IsDisabled_By_AccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);

  if (account.is_disabled) {
    console.log(`${res.locals.id_Account} is disabled`);
    return res.status(200).json({
      success: false,
      message: "❌ Your account is disabled",
    });
  }

  console.log(`${res.locals.id_Account} is not disabled`);
  next();
};

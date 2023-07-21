import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By__AccountId } from "../../../../components/account/dals";

export const Middleware__Block__Account_Disabled__By__AccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account__Read__By__AccountId(
    res.locals.id_Account
  );

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

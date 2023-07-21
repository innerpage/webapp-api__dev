import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By_AccountId } from "../../../../components/account/dals";

export const Middleware__Block__AccountDisabled_By_AccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account__Read__By_AccountId(
    res.locals.id__Account
  );

  if (account.is_disabled) {
    console.log(`${res.locals.id__Account} is disabled`);
    return res.status(200).json({
      success: false,
      message: "❌ Your account is disabled",
    });
  }

  console.log(`${res.locals.id__Account} is not disabled`);
  next();
};

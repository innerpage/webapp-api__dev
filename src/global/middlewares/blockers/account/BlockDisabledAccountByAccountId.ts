import { Request, Response, NextFunction } from "express";
import { readAccountById } from "../../../../components/account/dals";

export const BlockDisabledAccountByAccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await readAccountById(res.locals.accountId);

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

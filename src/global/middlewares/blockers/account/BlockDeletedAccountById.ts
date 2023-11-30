import { Request, Response, NextFunction } from "express";
import { readAccountById } from "../../../../components/account/dals";

export const BlockDeletedAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await readAccountById(res.locals.accountId);

  if (account.is_deleted) {
    console.log(`❌ ${res.locals.accountId} is deleted`);
    return res.status(200).json({
      success: false,
      message: "❌ Your account is deleted",
    });
  }

  console.log(`✅ ${res.locals.accountId} is active`);
  next();
};

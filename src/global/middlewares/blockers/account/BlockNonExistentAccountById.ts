import { Request, Response, NextFunction } from "express";
import { readAccountById } from "../../../../components/account/dals";

export const BlockNonExistentAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await readAccountById(res.locals.accountId);

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

import { Request, Response, NextFunction } from "express";
import { readAccountByEmail } from "../../../../components/account/dals";

export const BlockExistingAccountByEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await readAccountByEmail(res.locals.email);

  if (account) {
    console.log(`❌ ${res.locals.email} already exists`);
    return res.status(200).json({
      success: false,
      message: "❌ You are already registered",
    });
  }

  console.log(`✅ ${res.locals.email} does not exist`);
  next();
};

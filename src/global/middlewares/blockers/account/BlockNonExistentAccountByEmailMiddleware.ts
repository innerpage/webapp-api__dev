import { Request, Response, NextFunction } from "express";
import { readAccountByEmail } from "../../../../components/account/dals";

export const BlockNonExistentAccountByEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await readAccountByEmail(res.locals.email);

  if (!account) {
    console.log(`❌ ${res.locals.email} does not exist`);
    return res.status(400).json({
      success: false,
      message: "❌ You are not registered",
    });
  }

  console.log(`✅ ${res.locals.email} is registered`);
  next();
};

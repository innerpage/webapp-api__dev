import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By__Email } from "../../../../components/account/dals";

export const Middleware__Block__Account_NonExistence__By__Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account__Read__By__Email(res.locals.email);

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

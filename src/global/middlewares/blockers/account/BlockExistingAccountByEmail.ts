import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_By_Email } from "../../../../components/account/dals";

export const BlockExistingAccountByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_Read_By_Email(res.locals.email);

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

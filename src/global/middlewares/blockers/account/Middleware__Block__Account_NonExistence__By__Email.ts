import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_By_Email } from "../../../../components/account/dals";

export const Middleware_Block_Account_NonExistence_By_Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account_Read_By_Email(res.locals.email);

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

import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By_Email } from "../../../../components/account/dals";

export const Middleware__Block__AccountExistence_By_Email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account__Read__By_Email(res.locals.email);

  if (account) {
    console.log(`${res.locals.email} is  registered`);
    return res.status(200).json({
      success: false,
      message: "❌ You are already registered",
    });
  }

  console.log(`${res.locals.email} is not registered`);
  next();
};

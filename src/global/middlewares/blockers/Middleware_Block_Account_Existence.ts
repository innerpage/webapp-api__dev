import { Request, Response, NextFunction } from "express";
import { dal_Account_GetByEmail } from "../../../components/account/dals";

export const Middleware_Block_Account_Existence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_GetByEmail(res.locals.email);

  if (account) {
    console.log(`${res.locals.email} is  registered`);
    return res.status(200).json({
      success: false,
      message: "You are already registered",
    });
  }

  console.log(`${res.locals.email} is not registered`);
  next();
};

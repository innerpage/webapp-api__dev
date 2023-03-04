import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_ByEmail } from "../../../components/account/dals";

export const Middleware_Block_Account_NonExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_Read_ByEmail(res.locals.email);

  if (!account) {
    console.log(`${res.locals.email} is not registered`);
    return res.status(200).json({
      success: false,
      message: "You are not registered",
    });
  }

  console.log(`${res.locals.email} is  registered`);
  next();
};

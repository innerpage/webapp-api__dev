import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_By_AccountId } from "../../../../components/account/dals";

export const Middleware__Block__AccountNonExistence_By_AccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_Read_By_AccountId(res.locals.id_Account);

  if (!account) {
    console.log(`${res.locals.id_Account} is not registered`);
    return res.status(200).json({
      success: false,
      message: "❌ You are not registered",
    });
  }

  console.log(`${res.locals.id_Account} is registered`);
  next();
};

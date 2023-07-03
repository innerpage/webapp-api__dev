import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_ByAccountId } from "../../../components/account/dals";

export const Middleware_Block_Account_NonExistence_By_AccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account_Read_ByAccountId(res.locals.id_Account);

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

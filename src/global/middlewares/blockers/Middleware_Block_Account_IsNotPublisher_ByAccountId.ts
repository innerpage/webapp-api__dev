import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_ByAccountId } from "../../../components/account/dals";

export const Middleware_Block_Account_IsNotPublisher_ByAccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);

  if (!account.is_publisher) {
    console.log(`${res.locals.id_Account} is not a publisher`);
    return res.status(400).json({
      success: false,
      message: "Your account is not a publisher",
    });
  }

  console.log(`${res.locals.id_Account} is a publisher`);
  next();
};

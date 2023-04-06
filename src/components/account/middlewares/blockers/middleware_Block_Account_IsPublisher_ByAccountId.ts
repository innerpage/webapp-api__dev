import { Request, Response, NextFunction } from "express";
import { dal_Account_Read_ByAccountId } from "../../dals";

export const middleware_Block_Account_IsPublisher_ByAccountId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);

  if (account.is_publisher) {
    console.log(`${res.locals.id_Account} is already a publisher`);
    return res.status(400).json({
      success: false,
      message: "Your account is already a publisher",
    });
  }

  console.log(`${res.locals.id_Account} is already a publisher`);
  next();
};

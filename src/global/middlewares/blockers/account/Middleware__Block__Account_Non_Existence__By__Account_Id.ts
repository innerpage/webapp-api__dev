import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By__AccountId } from "../../../../components/account/dals";

export const Middleware__Block__Account_Non_Existence__By__Account_Id = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account__Read__By__AccountId(res.locals.id__Account);

  if (!account) {
    console.log(`${res.locals.id__Account} is not registered`);
    return res.status(200).json({
      success: false,
      message: "❌ You are not registered",
    });
  }

  console.log(`${res.locals.id__Account} is registered`);
  next();
};

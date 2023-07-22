import { Request, Response, NextFunction } from "express";
import { dal_Account__Read__By__Id_Account } from "../../../../components/account/dals";

export const Middleware__Block__Account_NonExistence__By__Id_Account = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await dal_Account__Read__By__Id_Account(res.locals.id_Account);

  if (!account) {
    console.log(`✅ SUCCESS: ${res.locals.id_Account} is not registered`);
    return res.status(200).json({
      success: false,
      message: "❌ You are not registered",
    });
  }

  console.log(`${res.locals.id_Account} is registered`);
  next();
};

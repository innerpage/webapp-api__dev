import { Request, Response, NextFunction } from "express";
import { dal_GetAccountCount_ByEmail } from "../../../components/account/dals";

export const checker_Account_Non_Existence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email } = req.body;
  email = email.toLowerCase();
  email = email.trim();

  let count_Accounts_With_Email = await dal_GetAccountCount_ByEmail(email);
  if (count_Accounts_With_Email > 0) {
    console.log(`${email} IS_REGISTERED`);
    next();
  } else {
    console.log(`${email} IS_NOT_REGISTERED`);
    return res.status(200).json({
      success: false,
      message: `${email} is not registered`,
    });
  }
};

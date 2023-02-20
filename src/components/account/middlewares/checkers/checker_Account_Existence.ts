import { Request, Response, NextFunction } from "express";
import { dal_GetAccountCount_ByEmail } from "../../dals";

export const checker_Account_Existence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email } = req.body;
  email = email.toLowerCase();
  email = email.trim();

  let count_Accounts_With_Email = await dal_GetAccountCount_ByEmail(email);

  if (count_Accounts_With_Email > 0) {
    let responseObj = {
      success: false,
      message: "This email is already registered",
    };

    res.status(200).json(responseObj);
  } else {
    next();
  }
};

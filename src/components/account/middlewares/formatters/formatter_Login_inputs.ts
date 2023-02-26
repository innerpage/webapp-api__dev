import { Request, Response, NextFunction } from "express";

export const formatter_Login_Inputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = req.body;
  let formatted_Login_Inputs: any = {
    email: email.trim().toLowerCase(),
    password: password,
  };

  res.locals.formatted_Login_Inputs = formatted_Login_Inputs;
  next();
};

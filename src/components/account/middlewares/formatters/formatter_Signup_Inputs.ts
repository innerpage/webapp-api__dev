import { Request, Response, NextFunction } from "express";

export const formatter_Signup_Inputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { firstName, lastName, email, password } = req.body;

  let formatted_Signup_Inputs: any = {
    firstName: firstName,
    lastName: lastName,
    email: email.trim().toLowerCase(),
    password: password,
  };

  res.locals.formatted_Signup_Inputs = formatted_Signup_Inputs;
  next();
};

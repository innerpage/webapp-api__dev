import { Request, Response, NextFunction } from "express";

export const middleware_Account_Format_Inputs_For_Mail_Code_EmailVerification =
  async (req: Request, res: Response, next: NextFunction) => {
    let { email } = req.body;

    res.locals.email = email.trim().toLowerCase();

    next();
  };
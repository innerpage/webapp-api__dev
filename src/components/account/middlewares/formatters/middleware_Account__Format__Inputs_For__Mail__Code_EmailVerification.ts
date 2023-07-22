import { Request, Response, NextFunction } from "express";

export const middleware_Account__Format__Inputs_For__Mail__Code_EmailVerification =
  async (req: Request, res: Response, next: NextFunction) => {
    let { email } = req.body;

    res.locals.email = email.trim().toLowerCase();

    next();
  };

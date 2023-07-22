import { Request, Response, NextFunction } from "express";

export const Middleware_Block_Account_LoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user_isLogged = !!req.session!.id_Account;

  if (user_isLogged) {
    console.log(`✅ ${req.session.id_Account} is LOGGED_IN`);
    next();
  } else {
    console.log(`❌ ${req.session.id_Account} is NOT_LOGGED_IN`);
    return res.status(400).json({
      success: false,
      message: "❌ You are not logged in",
    });
  }
};

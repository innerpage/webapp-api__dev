import { Request, Response, NextFunction } from "express";

export const Middleware__Block__Account_LoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user__is_Logged = !!req.session!.id_Account;

  if (user__is_Logged) {
    console.log(`${req.session.id_Account} is LOGGED_IN`);
    return res.status(400).json({
      success: false,
      message: "❌ You are already logged in",
    });
  } else {
    console.log("User is NOT_LOGGED_IN");
    next();
  }
};

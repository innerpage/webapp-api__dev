import { Request, Response, NextFunction } from "express";

export const Middleware__Block__Account__Logged_Out = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user__is_Logged = !!req.session!.id_Account;

  if (user__is_Logged) {
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "❌ You are not logged in",
    });
  }
};

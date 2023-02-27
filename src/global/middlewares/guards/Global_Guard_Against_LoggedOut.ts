import { Request, Response, NextFunction } from "express";

export const Global_Guard_Against_LoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user_isLogged = !!req.session!.id_Account;

  if (user_isLogged) {
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "You are not logged in",
    });
  }
};

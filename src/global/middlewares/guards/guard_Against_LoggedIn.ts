import { Request, Response, NextFunction } from "express";

export const guard_Against_LoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user_isLogged = !!req.session!.accountId;
  if (user_isLogged) {
    console.log("User is LOGGED_IN");
    return res
      .status(400)
      .json({ success: false, message: "User is already logged in" });
  } else {
    console.log("User is NOT_LOGGED_IN");
    next();
  }
};

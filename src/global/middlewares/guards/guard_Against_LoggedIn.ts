import { Request, Response, NextFunction } from "express";

export const guard_Against_LoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user_isLogged = !!req.session!.userId;
  if (user_isLogged) {
    let responseObj = {
      success: false,
      message: "User is already logged in",
    };
    return res.status(400).json(responseObj);
  } else {
    next();
  }
};

import { Request, Response, NextFunction } from "express";

export const guard_Against_LoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user_isLogged = !!req.session!.userId;

  if (user_isLogged) {
    next();
  } else {
    let responseObj = {
      success: false,
      message: "User is not logged in",
    };
    return res.status(400).json(responseObj);
  }
};

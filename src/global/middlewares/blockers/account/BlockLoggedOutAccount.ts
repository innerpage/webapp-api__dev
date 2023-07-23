import { Request, Response, NextFunction } from "express";

export const BlockLoggedOutAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLoggedIn = !!req.session!.accountId;

  if (isUserLoggedIn) {
    console.log(`✅ ${req.session.accountId} is logged in`);
    next();
  } else {
    console.log(`❌ ${req.session.accountId} is not logged in`);
    return res.status(400).json({
      success: false,
      message: "❌ You are not logged in",
    });
  }
};

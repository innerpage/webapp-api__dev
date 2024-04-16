import { Request, Response, NextFunction } from "express";

export const BlockLoggedInAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLoggedIn = !!req.session!.accountId;

  if (isUserLoggedIn) {
    console.log(`❌ ${req.session.accountId} is already logged in`);
    return res.status(400).json({
      success: false,
      message: "❌ You are already logged in",
    });
  }

  console.log("✅ User is not logged in");
  next();
};

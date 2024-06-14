import { Request, Response, NextFunction } from "express";
import { Var } from "../../../var";

export const BlockLoggedInAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLoggedIn = !!req.session!.accountId;

  if (isUserLoggedIn) {
    console.log(
      `${Var.app.emoji.failure} ${req.session.accountId} is already logged in`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} You are already logged in`,
    });
  }

  console.log(`${Var.app.emoji.success} User is not logged in`);
  next();
};

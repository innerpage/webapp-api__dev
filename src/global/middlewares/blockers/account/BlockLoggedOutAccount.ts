import { Request, Response, NextFunction } from "express";
import { Var } from "../../../var";

export const BlockLoggedOutAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLoggedIn = !!req.session!.accountId;

  if (!isUserLoggedIn) {
    console.log(
      `${Var.app.emoji.failure} ${req.session.accountId} is not logged in`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} You are not logged in`,
    });
  }

  console.log(`${Var.app.emoji.success} ${req.session.accountId} is logged in`);
  next();
};

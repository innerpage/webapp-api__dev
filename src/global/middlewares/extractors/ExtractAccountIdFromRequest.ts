import { Request, Response, NextFunction } from "express";
import { Var } from "../../var";

export const ExtractAccountIdFromRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let accountId: string = req.session!.accountId!;

  if (!accountId) {
    console.log(`${Var.app.emoji.failure} Account does not exist`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Account does not exist`,
    });
  }

  console.log(`${Var.app.emoji.success} Account exists`);
  res.locals.accountId = accountId;
  next();
};

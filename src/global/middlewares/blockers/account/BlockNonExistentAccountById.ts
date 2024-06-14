import { Request, Response, NextFunction } from "express";
import { readAccountById } from "../../../../components/account/dals";
import { Var } from "../../../var";

export const BlockNonExistentAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await readAccountById(res.locals.accountId);

  if (!account) {
    console.log(
      `${Var.app.emoji.failure} ${res.locals.accountId} is not registered`
    );
    return res.status(200).json({
      success: false,
      message: `${Var.app.emoji.failure} You are not registered`,
    });
  }

  console.log(`${Var.app.emoji.success} ${res.locals.accountId} is registered`);
  next();
};

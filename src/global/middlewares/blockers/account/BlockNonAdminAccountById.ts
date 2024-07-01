import { Request, Response, NextFunction } from "express";
import { readAccountById } from "../../../../components/account/dals";
import { Var } from "../../../var";

export const BlockNonAdminAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await readAccountById(res.locals.accountId);

  if (!account.is_admin) {
    console.log(
      `${Var.app.emoji.failure} ${res.locals.accountId} is not an admin`
    );
    return res.status(200).json({
      success: false,
      message: `${Var.app.emoji.failure} You are not an admin`,
    });
  }

  console.log(`${Var.app.emoji.success} ${res.locals.accountId} is an admin`);
  next();
};

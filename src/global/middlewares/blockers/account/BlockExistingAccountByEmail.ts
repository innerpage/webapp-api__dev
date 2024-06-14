import { Request, Response, NextFunction } from "express";
import { readAccountByEmail } from "../../../../components/account/dals";
import { Var } from "../../../var";

export const BlockExistingAccountByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await readAccountByEmail(res.locals.email);

  if (account) {
    console.log(
      `${Var.app.emoji.failure} ${res.locals.email} Account already exists`
    );
    return res.status(200).json({
      success: false,
      message: `${Var.app.emoji.failure} Account already exists`,
    });
  }

  console.log(
    `${Var.app.emoji.success} account with ${res.locals.email} does not exist`
  );
  next();
};

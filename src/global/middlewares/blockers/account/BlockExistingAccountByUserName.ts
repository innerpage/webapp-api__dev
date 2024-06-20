import { Request, Response, NextFunction } from "express";
import { readAccountByUserName } from "../../../../components/account/dals";
import { Var } from "../../../var";

export const BlockExistingAccountByUserName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account = await readAccountByUserName(res.locals.userName);

  if (account) {
    console.log(
      `${Var.app.emoji.failure} ${res.locals.userName} is registered`
    );
    return res.status(200).json({
      success: false,
      message: `${Var.app.emoji.failure} You are already registered`,
    });
  }

  console.log(
    `${Var.app.emoji.success} ${res.locals.userName} is not registered`
  );

  next();
};

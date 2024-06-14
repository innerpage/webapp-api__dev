import { Request, Response, NextFunction } from "express";
import { readAccountByEmail } from "../../../../components/account/dals";
import { Var } from "../../../var";

export const BlockNonExistentAccountByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let account: any = await readAccountByEmail(res.locals.email);

  if (!account) {
    console.log(
      `${Var.app.emoji.failure} ${res.locals.email} is not registered`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} You are not registered`,
    });
  }

  console.log(`${Var.app.emoji.success} ${res.locals.email} is registered`);
  next();
};

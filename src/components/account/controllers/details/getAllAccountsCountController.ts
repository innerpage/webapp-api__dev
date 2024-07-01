import { Request, Response } from "express";
import { readAllAccountsCount } from "../../dals";
import { Var } from "../../../../global/var";

export const getAllAccountsCountController = async (
  req: Request,
  res: Response
) => {
  let accountsCount: any = await readAllAccountsCount();
  if (!accountsCount) {
    console.log(`${Var.app.emoji.failure} Could not fetch accounts count`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch accounts count`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Notes fetched`,
    payload: accountsCount.count,
  });
};

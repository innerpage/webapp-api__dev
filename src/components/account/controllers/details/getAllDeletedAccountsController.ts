import { Request, Response } from "express";
import { readAllDeletedAccountsCount } from "../../dals";
import { Var } from "../../../../global/var";

export const getAllDeletedAccountsCountController = async (
  req: Request,
  res: Response
) => {
  let deletedAccountsCount: any = await readAllDeletedAccountsCount();
  if (!deletedAccountsCount) {
    console.log(`${Var.app.emoji.failure} Could not fetch accounts count`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch accounts count`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Notes fetched`,
    payload: deletedAccountsCount.count,
  });
};

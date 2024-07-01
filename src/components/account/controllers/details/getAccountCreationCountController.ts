import { Request, Response } from "express";
import { readAccountCreationCount } from "../../dals";
import { Var } from "../../../../global/var";

export const getAccountCreationCountController = async (
  req: Request,
  res: Response
) => {
  let accountCreationCount: any = await readAccountCreationCount();
  if (!accountCreationCount) {
    console.log(
      `${Var.app.emoji.failure} Could not fetch account creation count`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch account creation count`,
    });
  }

  let finalAccountCreationCount: any = [];
  accountCreationCount.map((item: any) => {
    let date: any = new Date(item.date).getDate();
    let monthName: string = new Date(item.date).toLocaleString("default", {
      month: "short",
    });
    let year: any = new Date(item.date).getFullYear();

    let obj: any = {
      x: `${date} ${monthName} ${year}`,
      y: item.count,
    };
    finalAccountCreationCount.push(obj);
  });

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Account creation count fetched`,
    payload: finalAccountCreationCount,
  });
};

import { Request, Response } from "express";
import { readAllNotesCount } from "../dals";
import { Var } from "../../../global/var";

export const getAllNotesCountController = async (
  req: Request,
  res: Response
) => {
  let notesCount: any = await readAllNotesCount();
  if (!notesCount) {
    console.log(`${Var.app.emoji.failure} Could not fetch notes count`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch notes count`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Notes fetched`,
    payload: notesCount.count,
  });
};

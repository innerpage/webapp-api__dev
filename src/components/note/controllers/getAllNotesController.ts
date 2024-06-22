import { Request, Response } from "express";
import { readAllNotesByAccountId } from "../dals";
import { Var } from "../../../global/var";

export const getAllNotesController = async (req: Request, res: Response) => {
  let notes: any = await readAllNotesByAccountId(res.locals.accountId);
  if (!notes) {
    console.log(`${Var.app.emoji.failure} Could not fetch notes`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch notes`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Notes fetched`,
    payload: notes,
  });
};

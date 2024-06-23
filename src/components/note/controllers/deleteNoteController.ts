import { Request, Response } from "express";
import { writeNoteDeletionById } from "../dals";
import { Var } from "../../../global/var";

export const deleteNoteController = async (req: Request, res: Response) => {
  let noteDeletionReturnData: any = await writeNoteDeletionById(
    res.locals.noteId,
    res.locals.accountId
  );

  if (!noteDeletionReturnData.success) {
    return res.status(400).json({
      success: false,
      message: noteDeletionReturnData.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Note deleted`,
    payload: {},
  });
};

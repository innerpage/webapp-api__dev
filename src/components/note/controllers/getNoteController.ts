import { Request, Response } from "express";
import { readNoteById } from "../dals";
import { Var } from "../../../global/var";

export const getNoteController = async (req: Request, res: Response) => {
  let noteId: string = req.params.noteId;
  if (!noteId) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid params`,
    });
  }

  let note: any = await readNoteById(noteId, res.locals.accountId);
  if (!note) {
    console.log(`${Var.app.emoji.failure} Could not fetch note`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch note`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Note fetched`,
    payload: note,
  });
};

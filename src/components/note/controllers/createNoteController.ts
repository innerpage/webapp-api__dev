import { Request, Response } from "express";
import { writeNewNoteByAccountId } from "../dals";
import { Var } from "../../../global/var";

export const createNoteController = async (req: Request, res: Response) => {
  let newNote: any = await writeNewNoteByAccountId(res.locals.accountId);
  console.log(newNote.message);
  if (!newNote.success) {
    return res.status(400).json({
      success: false,
      message: newNote.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Note created`,
    payload: newNote.payload,
  });
};

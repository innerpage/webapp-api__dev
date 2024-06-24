import { Request, Response } from "express";
import { writeNoteUpdateById } from "../dals";
import { Var } from "../../../global/var";

export const updateNoteController = async (req: Request, res: Response) => {
  let preview: string = res.locals.content.substring(0, 75);
  preview = `${preview}...`;

  let noteUpdateReturnData: any = await writeNoteUpdateById(
    res.locals.noteId,
    res.locals.accountId,
    res.locals.content,
    preview
  );
  console.log(noteUpdateReturnData.message);

  if (!noteUpdateReturnData.success) {
    console.log(`${Var.app.emoji.failure} Failed to update note`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Failed to update note`,
    });
  }

  return res.status(200).json({
    success: noteUpdateReturnData.success,
    message: noteUpdateReturnData.message,
    payload: {},
  });
};

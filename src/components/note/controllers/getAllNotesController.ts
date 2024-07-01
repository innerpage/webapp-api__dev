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

  notes = notes.filter((item: any) => item.preview);

  let finalNotes: any = [];
  notes.map((note: any) => {
    let date: any = new Date(note.createdAt).getDate();
    let monthName: string = new Date(note.createdAt).toLocaleString("default", {
      month: "short",
    });
    let year: any = new Date(note.createdAt).getFullYear();
    let obj: any = {
      id: note.id,
      preview: note.preview,
      timestamp: `${date} ${monthName} ${year}`,
    };
    finalNotes.push(obj);
  });

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Notes fetched`,
    payload: finalNotes,
  });
};

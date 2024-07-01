import { Request, Response } from "express";
import { readNoteCreationCount } from "../dals";
import { Var } from "../../../global/var";

export const getNoteCreationCountController = async (
  req: Request,
  res: Response
) => {
  let noteCreationCount: any = await readNoteCreationCount();
  if (!noteCreationCount) {
    console.log(`${Var.app.emoji.failure} Could not fetch note creation count`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch note creation count`,
    });
  }

  let finalNoteCreationCount: any = [];
  noteCreationCount.map((item: any) => {
    let date: any = new Date(item.date).getDate();
    let monthName: string = new Date(item.date).toLocaleString("default", {
      month: "short",
    });
    let year: any = new Date(item.date).getFullYear();

    let obj: any = {
      x: `${date} ${monthName} ${year}`,
      y: item.count,
    };
    finalNoteCreationCount.push(obj);
  });

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Note creation count fetched`,
    payload: finalNoteCreationCount,
  });
};

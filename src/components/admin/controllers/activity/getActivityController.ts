import { Request, Response } from "express";
import { readAccountCreationCount } from "../../../account/dals";
import { readNoteCreationCount } from "../../../note/dals";
import { Var } from "../../../../global/var";

export const getActivityController = async (req: Request, res: Response) => {
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

  let noteCreationCount: any = await readNoteCreationCount();
  if (!noteCreationCount) {
    console.log(`${Var.app.emoji.failure} Could not fetch note creation count`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch note creation count`,
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
      date: `${date} ${monthName} ${year}`,
      count: item.count,
    };
    finalAccountCreationCount.push(obj);
  });

  let finalNoteCreationCount: any = [];
  noteCreationCount.map((item: any) => {
    let date: any = new Date(item.date).getDate();
    let monthName: string = new Date(item.date).toLocaleString("default", {
      month: "short",
    });
    let year: any = new Date(item.date).getFullYear();
    let obj: any = {
      date: `${date} ${monthName} ${year}`,
      count: item.count,
    };
    finalNoteCreationCount.push(obj);
  });

  let datesArray: any = [];
  finalAccountCreationCount.map((obj: any) => {
    datesArray.push(obj.date);
  });
  finalNoteCreationCount.map((obj: any) => {
    datesArray.push(obj.date);
  });

  let finalDatesArray: any = [...new Set(datesArray)];
  let noteCountsArray: any = [];
  let accountCountsArray: any = [];

  finalDatesArray.map((date: string) => {
    let isAccountOnDateFound: boolean = false;
    finalAccountCreationCount.map((accountObj: any) => {
      if (date === accountObj.date) {
        accountCountsArray.push(accountObj.count);
        isAccountOnDateFound = true;
      }
    });
    if (!isAccountOnDateFound) {
      accountCountsArray.push(0);
    }

    let isNoteOnDateFound: boolean = false;
    finalNoteCreationCount.map((noteObj: any) => {
      if (date === noteObj.date) {
        noteCountsArray.push(noteObj.count);
        isNoteOnDateFound = true;
      }
    });
    if (!isNoteOnDateFound) {
      noteCountsArray.push(0);
    }
  });

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Activity details fetched`,
    payload: {
      label: finalDatesArray,
      notesCount: noteCountsArray,
      accountCount: accountCountsArray,
    },
  });
};

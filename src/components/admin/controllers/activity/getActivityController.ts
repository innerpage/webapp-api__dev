import { Request, Response } from "express";
import { readAccountCreationsByRange } from "../../../account/dals";
import { readNoteCreationsByRange } from "../../../note/dals";
import { Var } from "../../../../global/var";
import { DateTime, Interval } from "luxon";

export const getActivityController = async (req: Request, res: Response) => {
  let intervals: any;
  let rangeStart: string = "";
  let rangeEnd: string = DateTime.fromISO(res.locals.endDate)
    .plus({
      day: 1,
    })
    .toString();

  switch (res.locals.range) {
    case "1day":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          day: 1,
        })
        .toString();
      break;
    case "1week":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          week: 1,
        })
        .toString();
      break;
    case "1month":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          month: 1,
        })
        .toString();
      break;
    case "3months":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          months: 3,
        })
        .toString();
      break;
    case "6months":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          months: 6,
        })
        .toString();
      break;
    case "1year":
      rangeStart = DateTime.fromISO(res.locals.endDate)
        .minus({
          year: 1,
        })
        .toString();
      break;
    case "custom":
      rangeStart = DateTime.fromISO(res.locals.startDate).toString();
      break;
  }

  intervals = Interval.fromDateTimes(
    DateTime.fromISO(rangeStart),
    DateTime.fromISO(rangeEnd)
  )
    .splitBy({ day: 1 })
    .map((date: Interval) => date.start?.toISODate());

  let accountCreations: any = await readAccountCreationsByRange(
    rangeStart,
    rangeEnd
  );

  if (!accountCreations) {
    console.log(
      `${Var.app.emoji.failure} Could not fetch account creation details`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch account creation details`,
    });
  }

  let noteCreations: any = await readNoteCreationsByRange(rangeStart, rangeEnd);
  if (!noteCreations) {
    console.log(
      `${Var.app.emoji.failure} Could not fetch note creation details`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not fetch note creation details`,
    });
  }

  let finalAccountCreations: any = [];
  accountCreations.map((item: any) => {
    let obj: any = {
      date: item.date,
      count: item.count,
    };
    finalAccountCreations.push(obj);
  });

  let finalNoteCreations: any = [];
  noteCreations.map((item: any) => {
    let obj: any = {
      date: item.date,
      count: item.count,
    };
    finalNoteCreations.push(obj);
  });

  let noteCreationsArray: any = [];
  let accountCreationsArray: any = [];
  intervals.map((date: any) => {
    let isAccountFoundOnDate: boolean = false;
    accountCreations.map((item: any) => {
      if (date === item.date) {
        accountCreationsArray.push(item.count);
      }
    });
    if (!isAccountFoundOnDate) {
      accountCreationsArray.push(0);
    }
    let isNoteFoundOnDate: boolean = false;
    noteCreations.map((item: any) => {
      if (date === item.date) {
        noteCreationsArray.push(item.count);
      }
    });
    if (!isNoteFoundOnDate) {
      noteCreationsArray.push(0);
    }
  });

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Activity details fetched`,
    payload: {
      label: intervals,
      notesCount: noteCreationsArray,
      accountCount: accountCreationsArray,
    },
  });
};

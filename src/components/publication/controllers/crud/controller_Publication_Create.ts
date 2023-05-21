import { Request, Response } from "express";

import { dal_Publication_Write } from "../../dals";
import { dal_Account_Read_ByAccountId } from "../../../account/dals";

interface LooseObj {
  [key: string]: any;
}

export const controller_Publication_Create = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);
  let publisher: any = await account.getPublisher();

  let returnObj_NewPublication: LooseObj = await dal_Publication_Write(
    res.locals.title,
    res.locals.edition,
    res.locals.description,
    res.locals.url_Sample,
    res.locals.url_Toc,
    res.locals.url_Cover,
    publisher.id
  );
  console.log(returnObj_NewPublication.message);

  if (!returnObj_NewPublication.success) {
    console.log(`Failed to create new publication`);
    console.log(returnObj_NewPublication.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to create new publication",
      payload: returnObj_NewPublication.payload,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Publication created",
  });
};

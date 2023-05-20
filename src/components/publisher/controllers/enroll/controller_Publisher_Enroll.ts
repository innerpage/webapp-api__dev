import { Request, Response } from "express";

import {
  dal_Account_Read_ByAccountId,
  dal_Account_Write_PublisherFlag,
} from "../../../account/dals";
import { dal_Publisher_Write_NewPublisher } from "../../dals";

interface LooseObj {
  [key: string]: any;
}

export const controller_Publisher_Enroll = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);

  let returnObj_NewPublisher: any = await dal_Publisher_Write_NewPublisher(
    res.locals.business_Name,
    res.locals.business_Address,
    res.locals.support_Email,
    res.locals.url_Website,
    res.locals.url_Dl,
    res.locals.country,
    res.locals.state,
    res.locals.tax_Type,
    res.locals.id_Tax,
    res.locals.id_Account
  );
  console.log(returnObj_NewPublisher.message);

  if (!returnObj_NewPublisher.success) {
    console.log(`Failed to enroll new publisher`);
    console.log(returnObj_NewPublisher.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to enroll new publisher",
      payload: returnObj_NewPublisher.payload,
    });
  }

  let new_Publisher: LooseObj = returnObj_NewPublisher.payload;
  await account.setPublisher(new_Publisher);

  let returnObj_Write_PublisherFlag: LooseObj =
    await dal_Account_Write_PublisherFlag(res.locals.id_Account, true);
  console.log(returnObj_Write_PublisherFlag.message);

  if (!returnObj_Write_PublisherFlag.success) {
    console.log(`Failed to update publisher flag`);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to update publisher flag",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Publisher enrolled",
  });
};

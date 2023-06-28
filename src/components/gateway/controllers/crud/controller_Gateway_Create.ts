import { Request, Response } from "express";

import { dal_Gateway_Write } from "../../dals";
import { dal_Account_Read_ByAccountId } from "../../../account/dals";

interface LooseObj {
  [key: string]: any;
}

export const controller_Gateway_Create = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);
  let publisher: any = await account.getPublisher();

  let returnObj_NewGateway: LooseObj = await dal_Gateway_Write(
    res.locals.name,
    res.locals.fee_percentage,
    res.locals.public_key,
    res.locals.secret_key,
    res.locals.webhook_secret,
    publisher.id
  );
  console.log(returnObj_NewGateway.message);

  if (!returnObj_NewGateway.success) {
    console.log(`Failed to create new gateway`);
    console.log(returnObj_NewGateway.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to create new gateway",
      payload: returnObj_NewGateway.payload,
    });
  }

  return res.status(200).json({
    success: true,
    message: "✅ Gateway created",
  });
};

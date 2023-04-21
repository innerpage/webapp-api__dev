import { Request, Response } from "express";
import { dal_Account_Read_ByAccountId } from "../../dals";

export const controller_Account_GetDetails = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);

  let payload_AccountDetails: any = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isPublisher: account.is_publisher,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
    host: req.header("Host"),
    origin: req.header("Origin"),
  };

  return res.status(200).json({
    success: true,
    message: "Fetched account details",
    payload: payload_AccountDetails,
  });
};

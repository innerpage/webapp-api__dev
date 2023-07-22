import { Request, Response } from "express";
import { dal_Account__Read__By__Id_Account } from "../../dals";
import { config__App } from "../../../../config";

export const controller_Account__Get__Account_Details = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By__Id_Account(
    res.locals.id_Account
  );

  let payload_AccountDetails: any = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
  };

  let payload_AppDetails: any = {
    name__App: config__App.name__App,
    url__App__Website: config__App.url__App__Website,
    url__App: config__App.url__App,
    email__App: config__App.email__App,
    url__App__Support: config__App.url__App__Support,
    url__App__Tos: config__App.url__App__Tos,
    url__App__Privacy_Policy: config__App.url__App__Privacy_Policy,
    url__App__Cancellation_And_Refund_Policy:
      config__App.url__App__Cancellation_And_Refund_Policy,
    name__App__Session_Key: config__App.name__App__Session_Key,
    name__Business: config__App.name__Business,
    url__Website__Business: config__App.url__Website__Business,
    address__Business: config__App.address__Business,
    email__Business: config__App.email__Business,
    country__Client: res.locals.country__Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched account & app details",
    payload: {
      details_Account: payload_AccountDetails,
      details_App: payload_AppDetails,
    },
  });
};

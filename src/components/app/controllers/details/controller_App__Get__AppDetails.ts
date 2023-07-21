import { Request, Response } from "express";
import { config__App } from "../../../../config";

export const controller_App__Get__AppDetails = async (
  req: Request,
  res: Response
) => {
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
    message: "✅ Fetched app details",
    payload: payload_AppDetails,
  });
};

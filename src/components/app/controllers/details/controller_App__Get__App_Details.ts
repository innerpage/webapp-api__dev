import { Request, Response } from "express";
import { config_App } from "../../../../config";

export const controller_App__Get__App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_AppDetails: any = {
    name__App: config_App.name__App,
    url__App__Website: config_App.url__App__Website,
    url__App: config_App.url__App,
    email__App: config_App.email__App,
    url__App__Support: config_App.url__App__Support,
    url__App__Tos: config_App.url__App__Tos,
    url__App__Privacy_Policy: config_App.url__App__Privacy_Policy,
    url__App__Cancellation_And_Refund_Policy:
      config_App.url__App__Cancellation_And_Refund_Policy,
    name__App__Session_Key: config_App.name__App__Session_Key,
    name__Business: config_App.name__Business,
    url__Website__Business: config_App.url__Website__Business,
    address__Business: config_App.address__Business,
    email__Business: config_App.email__Business,
    country__Client: res.locals.country__Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_AppDetails,
  });
};

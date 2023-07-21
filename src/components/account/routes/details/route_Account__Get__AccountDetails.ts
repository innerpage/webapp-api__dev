import { Router } from "express";

import {
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  Middleware__Block__Account_Disabled__By__AccountId,
} from "../../../../global/middlewares";

import { controller_Account__Get__AccountDetails } from "../../controllers";

export const route_Account__Get__AccountDetails = Router();

route_Account__Get__AccountDetails.get(
  "/account",
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Account_Id__From__Request,
  Middleware__Block__Account_Non_Existence__By__Account_Id,
  Middleware__Block__Account_Disabled__By__AccountId,
  controller_Account__Get__AccountDetails
);

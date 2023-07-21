import { Router } from "express";

import {
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Id_Account__From__Request,
  Middleware__Block__Account_Non_Existence__By__Id_Account,
  Middleware__Block__Account_Disabled__By__Id_Account,
} from "../../../../global/middlewares";

import { controller_Account__Get__AccountDetails } from "../../controllers";

export const route_Account__Get__AccountDetails = Router();

route_Account__Get__AccountDetails.get(
  "/account",
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__Id_Account__From__Request,
  Middleware__Block__Account_Non_Existence__By__Id_Account,
  Middleware__Block__Account_Disabled__By__Id_Account,
  controller_Account__Get__AccountDetails
);

import { Router } from "express";

import {
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__AccountId__From__Request,
  Middleware__Block__AccountNonExistence__By__AccountId,
  Middleware__Block__AccountDisabled__By__AccountId,
} from "../../../../global/middlewares";

import { controller_Account__Get__Account_Details } from "../../controllers";

export const route_Account__Get__AccountDetails = Router();

route_Account__Get__AccountDetails.get(
  "/account",
  Middleware__Block__Account__Logged_Out,
  Middleware__Extract__AccountId__From__Request,
  Middleware__Block__AccountNonExistence__By__AccountId,
  Middleware__Block__AccountDisabled__By__AccountId,
  controller_Account__Get__Account_Details
);

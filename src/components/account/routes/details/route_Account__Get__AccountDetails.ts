import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
} from "../../../../global/middlewares";

import { controller_Account__Get__AccountDetails } from "../../controllers";

export const route_Account__Get__AccountDetails = Router();

route_Account__Get__AccountDetails.get(
  "/account",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__AccountId_From_Request,
  Middleware__Block__AccountNonExistence_By_AccountId,
  Middleware__Block__AccountDisabled_By_AccountId,
  controller_Account__Get__AccountDetails
);
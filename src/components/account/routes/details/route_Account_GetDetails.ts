import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_By_AccountId,
  Middleware_Block_Account_IsDisabled_By_AccountId,
} from "../../../../global/middlewares";

import { controller_Account_GetDetails } from "../../controllers";

export const route_Account_GetDetails = Router();

route_Account_GetDetails.get(
  "/account-details",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_By_AccountId,
  Middleware_Block_Account_IsDisabled_By_AccountId,
  controller_Account_GetDetails
);

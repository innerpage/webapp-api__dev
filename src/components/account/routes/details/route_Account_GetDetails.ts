import { Router } from "express";
import { controller_Account_GetDetails } from "../../controllers";
import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IfDisabled_ByAccountId,
} from "../../../../global/middlewares";

export const route_Account_GetDetails = Router();

route_Account_GetDetails.get(
  "/account-details",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IfDisabled_ByAccountId,
  controller_Account_GetDetails
);

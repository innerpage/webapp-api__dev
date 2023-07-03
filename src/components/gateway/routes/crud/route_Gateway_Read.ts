import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_By_AccountId,
  Middleware_Block_Account_IsDisabled_By_AccountId,
} from "../../../../global/middlewares";

import { controller_Gateway_Read } from "../../controllers";

export const route_Gateway_Read = Router();

route_Gateway_Read.get(
  "/gateway",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_By_AccountId,
  Middleware_Block_Account_IsDisabled_By_AccountId,
  Middleware_Extract_Origin,
  controller_Gateway_Read
);

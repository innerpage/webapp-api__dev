import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
} from "../../../../global/middlewares";

// Local middlewares
import {
  middleware_Validate_Gateway_CreateInputs,
  middleware_Format_Gateway_CreateInputs,
} from "../../middlewares";

import { controller_Gateway_Create } from "../../controllers";

export const route_Gateway_Create = Router();

route_Gateway_Create.post(
  "/gateway",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
  middleware_Validate_Gateway_CreateInputs,
  middleware_Format_Gateway_CreateInputs,
  controller_Gateway_Create
);

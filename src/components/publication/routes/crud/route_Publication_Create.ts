import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Format_Publication_CreateInputs,
  middleware_Validate_Publication_CreateInputs,
} from "../../middlewares";

import { controller_Publication_Create } from "../../controllers";

export const route_Publication_Create = Router();

route_Publication_Create.post(
  "/publication",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
  middleware_Validate_Publication_CreateInputs,
  middleware_Format_Publication_CreateInputs,
  controller_Publication_Create
);

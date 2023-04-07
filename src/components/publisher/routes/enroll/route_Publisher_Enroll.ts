import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsPublisher_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Publisher_EnrollInputs,
  middleware_Format_Publisher_EnrollInputs,
} from "../../middlewares";

import { controller_Publisher_Enroll } from "../../controllers";

export const route_Publisher_Enroll = Router();

route_Publisher_Enroll.post(
  "/publisher",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsPublisher_ByAccountId,
  middleware_Validate_Publisher_EnrollInputs,
  middleware_Format_Publisher_EnrollInputs,
  controller_Publisher_Enroll
);

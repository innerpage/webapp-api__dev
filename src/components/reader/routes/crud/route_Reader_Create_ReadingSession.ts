import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Inputs_For_ReadingSession,
  middleware_Format_Inputs_For_ReadingSession,
} from "../../middlewares";

import { controller_Reader_Create_ReadingSession } from "../../controllers";

export const route_Reader_Create_ReadingSession = Router();

route_Reader_Create_ReadingSession.post(
  "/reading-session",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Inputs_For_ReadingSession,
  middleware_Format_Inputs_For_ReadingSession,
  controller_Reader_Create_ReadingSession
);

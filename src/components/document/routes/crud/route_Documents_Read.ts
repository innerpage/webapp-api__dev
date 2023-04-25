import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Inputs_For_Documents_Read,
  middleware_Format_Inputs_For_Documents_Read,
} from "../../middlewares";

import { controller_Documents_Read_By_PublicationId } from "../../controllers";

export const route_Documents_Read = Router();

route_Documents_Read.post(
  "/documents",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Inputs_For_Documents_Read,
  middleware_Format_Inputs_For_Documents_Read,
  controller_Documents_Read_By_PublicationId
);

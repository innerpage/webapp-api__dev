import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../../global/middlewares";

import {
  middleware_Validate_Inputs_For_Document_Read,
  middleware_Format_Inputs_For_Document_Read,
} from "../../../middlewares";

import { controller_Document_Read_By_DocumentId } from "../../../controllers";

export const route_Document_Read_By_DocumentId = Router();

route_Document_Read_By_DocumentId.get(
  "/document",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Inputs_For_Document_Read,
  middleware_Format_Inputs_For_Document_Read,
  controller_Document_Read_By_DocumentId
);

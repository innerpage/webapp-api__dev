import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Inputs_For_Document_Price,
  middleware_Format_Inputs_For_Document_Price,
} from "../../../document/middlewares";

import { controller_Reading_Get_By_Id } from "../../controllers";

export const route_Reading_By_Id = Router();

route_Reading_By_Id.post(
  "/reading",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Inputs_For_Document_Price,
  middleware_Format_Inputs_For_Document_Price,
  controller_Reading_Get_By_Id
);

import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Inputs_To_Read_Page_By_No,
  middleware_Format_Inputs_To_Read_Page_By_No,
} from "../../middlewares";

import { controller_Page_Read_By_No } from "../../controllers";

export const route_Page_Read_By_No = Router();

route_Page_Read_By_No.post(
  "/page",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Inputs_To_Read_Page_By_No,
  middleware_Format_Inputs_To_Read_Page_By_No,
  controller_Page_Read_By_No
);

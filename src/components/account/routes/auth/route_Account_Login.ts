import { Router } from "express";

import {
  Middleware_Block_Account_LoggedIn,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IfDisabled_ByAccountId,
} from "../../../../global/middlewares/";

import {
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
} from "../../middlewares";

import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  Middleware_Block_Account_LoggedIn,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IfDisabled_ByAccountId,
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
  controller_Account_Login
);

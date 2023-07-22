import { Router } from "express";

import {
  Middleware_Block_Account_LoggedIn,
  Middleware_Block_Account_NonExistence_By_Email,
} from "../../../../global/middlewares";

import {
  middleware_Account_Validate_Inputs_For_Login,
  middleware_Account_Format_Inputs_For_Login,
} from "../../middlewares";

import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  Middleware_Block_Account_LoggedIn,
  middleware_Account_Validate_Inputs_For_Login,
  middleware_Account_Format_Inputs_For_Login,
  Middleware_Block_Account_NonExistence_By_Email,
  controller_Account_Login
);

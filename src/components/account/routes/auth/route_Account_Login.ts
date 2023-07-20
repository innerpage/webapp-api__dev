import { Router } from "express";

import {
  Middleware__Block__Account_LoggedIn,
  Middleware__Block__AccountNonExistence_By_Email,
} from "../../../../global/middlewares/";

import {
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
} from "../../middlewares";

import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  Middleware__Block__Account_LoggedIn,
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
  Middleware__Block__AccountNonExistence_By_Email,
  controller_Account_Login
);

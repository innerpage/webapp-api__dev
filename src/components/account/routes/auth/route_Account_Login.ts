import { Router } from "express";

import {
  Middleware_Block_Account_LoggedIn,
  Middleware_Block_Account_NonExistence,
} from "../../../../global/middlewares/";
import {
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
  middleware_Check_Account_Password,
} from "../../middlewares";
import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  Middleware_Block_Account_LoggedIn,
  middleware_Validate_Account_LoginInputs,
  middleware_Format_Account_LoginInputs,
  Middleware_Block_Account_NonExistence,
  middleware_Check_Account_Password,
  controller_Account_Login
);

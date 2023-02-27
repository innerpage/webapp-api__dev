import { Router } from "express";

import { Middleware_Block_LoggedIn } from "../../../../global/middlewares/";
import {
  validator_Login_Inputs,
  formatter_Login_Inputs,
  checker_Account_Password,
} from "../../middlewares";
import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  Middleware_Block_LoggedIn,
  validator_Login_Inputs,
  formatter_Login_Inputs,
  checker_Account_Password,
  controller_Account_Login
);

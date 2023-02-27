import { Router } from "express";

import { Middleware_Block_LoggedIn } from "../../../../global/middlewares/";
import {
  validator_Signup_Inputs,
  formatter_Signup_Inputs,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  Middleware_Block_LoggedIn,
  validator_Signup_Inputs,
  formatter_Signup_Inputs,
  controller_Account_Signup
);

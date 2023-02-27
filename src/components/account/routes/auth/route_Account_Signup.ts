import { Router } from "express";

import {
  Middleware_Block_Account_LoggedIn,
  Middleware_Block_Account_Existence,
} from "../../../../global/middlewares/";
import {
  middleware_Validate_Account_SignupInputs,
  middleware_Format_Account_SignupInputs,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  Middleware_Block_Account_LoggedIn,
  middleware_Validate_Account_SignupInputs,
  middleware_Format_Account_SignupInputs,
  Middleware_Block_Account_Existence,
  controller_Account_Signup
);

import { Router } from "express";

import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";
import { middleware_Validate_Account_SignupInputs } from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/verify-email",
  middleware_Validate_Account_SignupInputs,
  Middleware_Block_Account_NonExistence,
  controller_Account_Signup
);

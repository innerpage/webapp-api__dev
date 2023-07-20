import { Router } from "express";

import {
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__Request_By_Origin,
  Middleware__Extract__IP_From_Origin,
  Middleware__Extract__Country_From_IP,
  Middleware__Block__Account_LoggedIn,
  Middleware__Block__AccountExistence_By_Email,
} from "../../../../global/middlewares/";
import {
  middleware_Validate_Account_SignupInputs,
  middleware_Format_Account_SignupInputs,
} from "../../middlewares";
import { controller_Account__Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__Request_By_Origin,
  Middleware__Extract__IP_From_Origin,
  Middleware__Extract__Country_From_IP,
  Middleware__Block__Account_LoggedIn,
  middleware_Validate_Account_SignupInputs,
  middleware_Format_Account_SignupInputs,
  Middleware__Block__AccountExistence_By_Email,
  controller_Account__Signup
);

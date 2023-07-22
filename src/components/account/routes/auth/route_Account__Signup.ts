import { Router } from "express";

import {
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Request_By_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
  Middleware_Block_Account_LoggedIn,
  Middleware_Block_Account_Existence_By_Email,
} from "../../../../global/middlewares";
import {
  middleware_Account_Validate_Inputs_For_Signup,
  middleware_Account_Format_Inputs_For_Signup,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Request_By_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
  Middleware_Block_Account_LoggedIn,
  middleware_Account_Validate_Inputs_For_Signup,
  middleware_Account_Format_Inputs_For_Signup,
  Middleware_Block_Account_Existence_By_Email,
  controller_Account_Signup
);

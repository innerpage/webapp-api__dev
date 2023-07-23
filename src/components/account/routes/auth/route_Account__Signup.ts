import { Router } from "express";

import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  BlockExistingAccountByEmail,
} from "../../../../global/middlewares";
import {
  middleware_Account_Validate_Inputs_For_Signup,
  middleware_Account_Format_Inputs_For_Signup,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  middleware_Account_Validate_Inputs_For_Signup,
  middleware_Account_Format_Inputs_For_Signup,
  BlockExistingAccountByEmail,
  controller_Account_Signup
);

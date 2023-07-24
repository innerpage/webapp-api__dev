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
  validateInputsForSignup,
  formatInputsForSignup,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const signupRoute = Router();

signupRoute.post(
  "/signup",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  validateInputsForSignup,
  formatInputsForSignup,
  BlockExistingAccountByEmail,
  controller_Account_Signup
);

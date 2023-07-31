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
  validateInputsForSignupMiddleware,
  formatInputsForSignupMiddleware,
} from "../../middlewares";

import { signupController } from "../../controllers";

export const signupRoute = Router();

signupRoute.post(
  "/signup",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  validateInputsForSignupMiddleware,
  formatInputsForSignupMiddleware,
  BlockExistingAccountByEmail,
  signupController
);

import { Router } from "express";

import {
  ExtractOriginFromRequestMiddleware,
  BlockRequestByOriginMiddleware,
  ExtractIPAddressFromOriginMiddleware,
  ExtractCountryFromIPAddressMiddleware,
  BlockLoggedInAccountMiddleware,
  BlockExistingAccountByEmailMiddleware,
} from "../../../../global/middlewares";

import {
  validateInputsForSignupMiddleware,
  formatInputsForSignupMiddleware,
} from "../../middlewares";

import { signupController } from "../../controllers";

export const signupRoute = Router();

signupRoute.post(
  "/signup",
  ExtractOriginFromRequestMiddleware,
  BlockRequestByOriginMiddleware,
  ExtractIPAddressFromOriginMiddleware,
  ExtractCountryFromIPAddressMiddleware,
  BlockLoggedInAccountMiddleware,
  validateInputsForSignupMiddleware,
  formatInputsForSignupMiddleware,
  BlockExistingAccountByEmailMiddleware,
  signupController
);

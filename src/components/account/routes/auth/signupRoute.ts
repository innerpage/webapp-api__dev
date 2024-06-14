import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  BlockExistingAccountByEmail,
} from "../../../../global/middlewares";
import { validateSignupPayload, formatSignupPayload } from "../../middlewares";
import { signupController } from "../../controllers";

export const signupRoute = Router();

signupRoute.post(
  "/signup",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedInAccount,
  validateSignupPayload,
  formatSignupPayload,
  BlockExistingAccountByEmail,
  signupController
);

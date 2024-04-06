import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForCodeVerificationMiddleware,
  formatInputsForCodeVerificationMiddleware,
} from "../../middlewares";

import { verifyCodeController } from "../../controllers";

export const verifyCodeRoute = Router();

verifyCodeRoute.post(
  "/verify",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  validateInputsForCodeVerificationMiddleware,
  formatInputsForCodeVerificationMiddleware,
  BlockNonExistentAccountByEmail,
  verifyCodeController
);

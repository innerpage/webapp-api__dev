import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForEmailVerificationMiddleware,
  formatInputsForEmailVerificationMiddleware,
} from "../../middlewares";

import { verifyEmailController } from "../../controllers";

export const verifyEmailRoute = Router();

verifyEmailRoute.post(
  "/verify",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  validateInputsForEmailVerificationMiddleware,
  formatInputsForEmailVerificationMiddleware,
  BlockNonExistentAccountByEmail,
  verifyEmailController
);

import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
} from "../../../../global/middlewares";
import {
  validateEmailVerificationPayload,
  formatEmailVerificationPayload,
} from "../../middlewares";
import { verifyEmailController } from "../../controllers";

export const verifyEmailRoute = Router();

verifyEmailRoute.post(
  "/verify-email",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  validateEmailVerificationPayload,
  formatEmailVerificationPayload,
  verifyEmailController
);

import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";
import { validateMailPayload, formatMailPayload } from "../../middlewares";
import { mailVerificationLinkController } from "../../controllers";

export const mailVerificationLinkRoute = Router();

mailVerificationLinkRoute.post(
  "/mail-verification-link",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  validateMailPayload,
  formatMailPayload,
  mailVerificationLinkController
);

import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForMailMiddleware,
  formatInputsForMailMiddleware,
} from "../../middlewares";
import { mailVerificationLinkController } from "../../controllers";

export const mailPasswordResetLinkRoute = Router();

mailPasswordResetLinkRoute.post(
  "/mail-verification-link",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  validateInputsForMailMiddleware,
  formatInputsForMailMiddleware,
  BlockNonExistentAccountByEmail,
  mailVerificationLinkController
);

import { Router } from "express";

import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";
import { middleware_Validate_Account_EmailVerificationCode } from "../../middlewares";
import { controller_Account_EmailVerificationCode } from "../../controllers";

export const route_Account_EmailVerificationCode = Router();

route_Account_EmailVerificationCode.post(
  "/verify-email",
  middleware_Validate_Account_EmailVerificationCode,
  Middleware_Block_Account_NonExistence,
  controller_Account_EmailVerificationCode
);

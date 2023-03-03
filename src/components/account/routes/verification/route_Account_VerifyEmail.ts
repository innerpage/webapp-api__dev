import { Router } from "express";
import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Block_Account_NonExistence,
} from "../../../../global/middlewares";
import {
  middleware_Validate_Account_EmailVerificationInputs,
  middleware_Format_Account_EmailVerificationInputs,
} from "../../middlewares";
import { controller_Account_VerifyEmail } from "../../controllers";

export const route_Account_VerifyEmail = Router();

route_Account_VerifyEmail.post(
  "/verify-email",
  middleware_Validate_Account_EmailVerificationInputs,
  middleware_Format_Account_EmailVerificationInputs,
  Middleware_Block_Account_NonExistence,
  Middleware_Block_Account_LoggedOut,
  controller_Account_VerifyEmail
);
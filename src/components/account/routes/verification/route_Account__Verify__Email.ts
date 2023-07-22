import { Router } from "express";
import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Block_Account_NonExistence_By_Email,
} from "../../../../global/middlewares";
import {
  middleware_Account_Validate_Inputs_For_Verify_Email,
  middleware_Account_Format_Inputs_For_Verify_Email,
} from "../../middlewares";
import { controller_Account_Verify_Email } from "../../controllers";

export const route_Account_Verify_Email = Router();

route_Account_Verify_Email.post(
  "/verify-email",
  middleware_Account_Validate_Inputs_For_Verify_Email,
  middleware_Account_Format_Inputs_For_Verify_Email,
  Middleware_Block_Account_NonExistence_By_Email,
  Middleware_Block_Account_LoggedOut,
  controller_Account_Verify_Email
);

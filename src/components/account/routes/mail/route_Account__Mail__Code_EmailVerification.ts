import { Router } from "express";
import {
  Middleware_Block_Account_NonExistence_By_Id_Account,
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
} from "../../../../global/middlewares";
import { controller_Account_Mail_Code_EmailVerification } from "../../controllers";
import {
  middleware_Account_Validate_Inputs_For_Mail_Code_EmailVerification,
  middleware_Account_Format_Inputs_For_Mail_Code_EmailVerification,
} from "../../middlewares";

export const route_Account_Mail_Code_EmailVerification = Router();

route_Account_Mail_Code_EmailVerification.post(
  "/resend-email-verification-code",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
  Middleware_Block_Account_NonExistence_By_Id_Account,
  middleware_Account_Validate_Inputs_For_Mail_Code_EmailVerification,
  middleware_Account_Format_Inputs_For_Mail_Code_EmailVerification,
  controller_Account_Mail_Code_EmailVerification
);

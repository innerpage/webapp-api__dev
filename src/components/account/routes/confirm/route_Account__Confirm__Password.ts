import { Router } from "express";
import { Middleware_Block_Account_NonExistence_By_Email } from "../../../../global/middlewares";
import {
  middleware_Account_Validate_Inputs_For_Confirm_Password,
  middleware_Account_Format_Inputs_For_Confirm_Password,
} from "../../middlewares";
import { controller_Account_Confirm_Password } from "../../controllers";

export const route_Account_Confirm_Password = Router();

route_Account_Confirm_Password.post(
  "/password",
  middleware_Account_Validate_Inputs_For_Confirm_Password,
  middleware_Account_Format_Inputs_For_Confirm_Password,
  Middleware_Block_Account_NonExistence_By_Email,
  controller_Account_Confirm_Password
);

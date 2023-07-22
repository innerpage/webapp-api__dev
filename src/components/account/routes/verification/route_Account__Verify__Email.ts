import { Router } from "express";
import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Block__Account_NonExistence__By__Email,
} from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__Verify__Email,
  middleware_Account__Format__Inputs_For__Verify__Email,
} from "../../middlewares";
import { controller_Account__Verify__Email } from "../../controllers";

export const route_Account__Verify__Email = Router();

route_Account__Verify__Email.post(
  "/verify-email",
  middleware_Account__Validate__Inputs_For__Verify__Email,
  middleware_Account__Format__Inputs_For__Verify__Email,
  Middleware__Block__Account_NonExistence__By__Email,
  Middleware__Block__Account_LoggedOut,
  controller_Account__Verify__Email
);

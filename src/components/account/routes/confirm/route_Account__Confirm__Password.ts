import { Router } from "express";
import { Middleware__Block__Account_NonExistence__By__Email } from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__Confirm__Password,
  middleware_Account__Format__Inputs_For__Confirm__Password,
} from "../../middlewares";
import { controller_Account__Confirm__Password } from "../../controllers";

export const route_Account__Confirm__Password = Router();

route_Account__Confirm__Password.post(
  "/password",
  middleware_Account__Validate__Inputs_For__Confirm__Password,
  middleware_Account__Format__Inputs_For__Confirm__Password,
  Middleware__Block__Account_NonExistence__By__Email,
  controller_Account__Confirm__Password
);

import { Router } from "express";

import {
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__Request__By__Origin,
  Middleware__Extract__IP__From__Origin,
  Middleware__Extract__Country__From__IP,
  Middleware__Block__Account__Logged_In,
  Middleware__Block__Account_Existence__By__Email,
} from "../../../../global/middlewares";
import {
  middleware_Account__Validate__Inputs_For__Signup,
  middleware_Account__Format__Inputs_For__Signup,
} from "../../middlewares";
import { controller_Account__Signup } from "../../controllers";

export const route_Account__Signup = Router();

route_Account__Signup.post(
  "/signup",
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__Request__By__Origin,
  Middleware__Extract__IP__From__Origin,
  Middleware__Extract__Country__From__IP,
  Middleware__Block__Account__Logged_In,
  middleware_Account__Validate__Inputs_For__Signup,
  middleware_Account__Format__Inputs_For__Signup,
  Middleware__Block__Account_Existence__By__Email,
  controller_Account__Signup
);

import { Router } from "express";

import {
  Middleware__Block__Account_LoggedIn,
  Middleware__Block__AccountNonExistence_By_Email,
} from "../../../../global/middlewares";

import {
  middleware_Account__Validate__Inputs_For__Login,
  middleware_Account__Format__Inputs_For__Login,
} from "../../middlewares";

import { controller_Account__Login } from "../../controllers";

export const route_Account__Login = Router();

route_Account__Login.post(
  "/login",
  Middleware__Block__Account_LoggedIn,
  middleware_Account__Validate__Inputs_For__Login,
  middleware_Account__Format__Inputs_For__Login,
  Middleware__Block__AccountNonExistence_By_Email,
  controller_Account__Login
);

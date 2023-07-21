import { Router } from "express";

import {
  Middleware__Block__Account__Logged_In,
  Middleware__Block__Account_Non_Existence__By__Email,
} from "../../../../global/middlewares";

import {
  middleware_Account__Validate__Inputs_For__Login,
  middleware_Account__Format__Inputs_For__Login,
} from "../../middlewares";

import { controller_Account__Login } from "../../controllers";

export const route_Account__Login = Router();

route_Account__Login.post(
  "/login",
  Middleware__Block__Account__Logged_In,
  middleware_Account__Validate__Inputs_For__Login,
  middleware_Account__Format__Inputs_For__Login,
  Middleware__Block__Account_Non_Existence__By__Email,
  controller_Account__Login
);

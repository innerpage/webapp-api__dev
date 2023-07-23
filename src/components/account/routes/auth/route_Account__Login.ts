import { Router } from "express";

import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  middleware_Account_Validate_Inputs_For_Login,
  middleware_Account_Format_Inputs_For_Login,
} from "../../middlewares";

import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  BlockLoggedInAccount,
  middleware_Account_Validate_Inputs_For_Login,
  middleware_Account_Format_Inputs_For_Login,
  BlockNonExistentAccountByEmail,
  controller_Account_Login
);

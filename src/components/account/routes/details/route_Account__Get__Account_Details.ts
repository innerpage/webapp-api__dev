import { Router } from "express";

import {
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__Id_Account__From__Request,
  Middleware__Block__Account_NonExistence__By__Id_Account,
  Middleware__Block__Account_Disabled__By__Id_Account,
} from "../../../../global/middlewares";

import { controller_Account__Get__Account_Details } from "../../controllers";

export const route_Account__Get__Account_Details = Router();

route_Account__Get__Account_Details.get(
  "/account",
  Middleware__Block__Account_LoggedOut,
  Middleware__Extract__Id_Account__From__Request,
  Middleware__Block__Account_NonExistence__By__Id_Account,
  Middleware__Block__Account_Disabled__By__Id_Account,
  controller_Account__Get__Account_Details
);

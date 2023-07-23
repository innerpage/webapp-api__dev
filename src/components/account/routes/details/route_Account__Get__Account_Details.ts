import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import { controller_Account_Get_Account_Details } from "../../controllers";

export const route_Account_Get_Account_Details = Router();

route_Account_Get_Account_Details.get(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  controller_Account_Get_Account_Details
);

import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import { controller_Account_Get_Account_Details } from "../../controllers";

export const getAccountDetailsRoute = Router();

getAccountDetailsRoute.get(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  controller_Account_Get_Account_Details
);

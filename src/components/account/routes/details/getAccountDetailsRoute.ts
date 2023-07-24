import { Router } from "express";

import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
} from "../../../../global/middlewares";

import { getAccountDetailsController } from "../../controllers";

export const getAccountDetailsRoute = Router();

getAccountDetailsRoute.get(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountByAccountId,
  BlockDisabledAccountByAccountId,
  getAccountDetailsController
);

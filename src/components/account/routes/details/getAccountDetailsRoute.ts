import { Router } from "express";

import {
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
} from "../../../../global/middlewares";

import { getAccountDetailsController } from "../../controllers";

export const getAccountDetailsRoute = Router();

getAccountDetailsRoute.get(
  "/account",
  BlockLoggedOutAccountMiddleware,
  ExtractAccountIdFromRequestMiddleware,
  BlockNonExistentAccountByIdMiddleware,
  BlockDisabledAccountByIdMiddleware,
  getAccountDetailsController
);

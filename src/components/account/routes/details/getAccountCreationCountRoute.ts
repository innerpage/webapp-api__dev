import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../../global/middlewares";
import { getAccountCreationCountController } from "../../controllers";

export const getAccountCreationCountRoute = Router();

getAccountCreationCountRoute.get(
  "/account-creation-count",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  getAccountCreationCountController
);

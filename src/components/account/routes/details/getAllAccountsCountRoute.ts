import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../../global/middlewares";
import { getAllAccountsCountController } from "../../controllers";

export const getAllAccountsCountRoute = Router();

getAllAccountsCountRoute.get(
  "/accounts-count",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  getAllAccountsCountController
);

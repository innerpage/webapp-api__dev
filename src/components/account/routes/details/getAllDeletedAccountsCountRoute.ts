import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
} from "../../../../global/middlewares";
import { getAllDeletedAccountsCountController } from "../../controllers";

export const getAllDeletedAccountsCountRoute = Router();

getAllDeletedAccountsCountRoute.get(
  "/deleted-accounts",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockNonAdminAccountById,
  getAllDeletedAccountsCountController
);

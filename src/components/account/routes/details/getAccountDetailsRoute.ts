import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";
import { getAccountDetailsController } from "../../controllers";

export const getAccountDetailsRoute = Router();

getAccountDetailsRoute.get(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  getAccountDetailsController
);

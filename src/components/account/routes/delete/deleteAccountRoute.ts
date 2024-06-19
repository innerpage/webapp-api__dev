import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";
import { deleteAccountController } from "../../controllers";

export const deleteAccountRoute = Router();

deleteAccountRoute.delete(
  "/account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  deleteAccountController
);

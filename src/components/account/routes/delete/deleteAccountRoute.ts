import { Router } from "express";
import {
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
} from "../../../../global/middlewares";
import { deleteAccountController } from "../../controllers/delete/deleteAccountController";

export const deleteAccountRoute = Router();

deleteAccountRoute.post(
  "/delete-account",
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  BlockDeletedAccountById,
  deleteAccountController
);

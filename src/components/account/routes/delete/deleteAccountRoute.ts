import { Router } from "express";
import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
} from "../../../../global/middlewares";
import { deleteAccountController } from "../../controllers";

export const deleteAccountRoute = Router();

deleteAccountRoute.delete(
  "/account",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  BlockLoggedOutAccount,
  ExtractAccountIdFromRequest,
  BlockNonExistentAccountById,
  deleteAccountController
);

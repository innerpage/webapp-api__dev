import { Router } from "express";
import {
  BlockLoggedOutAccountMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
} from "../../../../global/middlewares";
import {
  validateInputsForEmailVerificationMiddleware,
  formatInputsForEmailVerificationMiddleware,
} from "../../middlewares";
import { verifyEmailController } from "../../controllers";

export const verifyEmailRoute = Router();

verifyEmailRoute.post(
  "/verify-email",
  validateInputsForEmailVerificationMiddleware,
  formatInputsForEmailVerificationMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
  BlockLoggedOutAccountMiddleware,
  verifyEmailController
);

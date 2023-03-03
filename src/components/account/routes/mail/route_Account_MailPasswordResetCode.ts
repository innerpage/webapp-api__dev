import { Router } from "express";
import { Middleware_Block_Account_NonExistence } from "../../../../global/middlewares";

export const route_Account_MailPasswordResetCode = Router();

route_Account_MailPasswordResetCode.post("/mail-password-reset-code");

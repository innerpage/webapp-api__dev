import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  // Middleware_Extract_PublisherId_ByOrigin
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

export const route_Document_Upload = Router();

route_Document_Upload.get(
  "/document",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  // Middleware_Extract_PublisherId_ByOrigin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId
);

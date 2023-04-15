import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import { controller_Document_GetAll_By_PublisherDl } from "../../controllers";

export const route_Document_GetAll_By_PublisherDl = Router();

route_Document_GetAll_By_PublisherDl.get(
  "/documents",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Extract_Origin,
  controller_Document_GetAll_By_PublisherDl
);

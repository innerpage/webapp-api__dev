import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Document_UploadInputs,
  middleware_Format_Document_UploadInputs,
} from "../../middlewares";

import { controller_Document_Upload } from "../../controllers";

import { config_MulterUpload } from "../../../../config";

export const route_Document_Create = Router();

route_Document_Create.post(
  "/document",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
  config_MulterUpload.any(),
  middleware_Validate_Document_UploadInputs,
  middleware_Format_Document_UploadInputs,
  controller_Document_Upload
);

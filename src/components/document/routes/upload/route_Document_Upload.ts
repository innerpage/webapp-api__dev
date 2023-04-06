import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../global/middlewares";

import {
  middleware_Validate_Document_UploadInputs,
  middleware_Format_Document_UploadInputs,
} from "../../middlewares";

import { controller_Document_Upload } from "../../controllers";

import { config_MulterUpload } from "../../../../config";

export const route_Document_Upload = Router();

route_Document_Upload.post(
  "/upload",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  middleware_Validate_Document_UploadInputs,
  middleware_Format_Document_UploadInputs,
  config_MulterUpload.any(),
  controller_Document_Upload
);

import { Router } from "express";
import { controller_Document_Upload } from "../../controllers";

export const route_Document_Upload = Router();

route_Document_Upload.post("/upload", controller_Document_Upload);

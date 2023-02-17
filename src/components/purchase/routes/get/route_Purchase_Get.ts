import { Router } from "express";
import { controller_Purchase_Get } from "../../controllers";

export const route_Purchase_Get = Router();

route_Purchase_Get.post("/purchase", controller_Purchase_Get);

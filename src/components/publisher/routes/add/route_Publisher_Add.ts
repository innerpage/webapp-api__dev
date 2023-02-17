import { Router } from "express";
import { controller_Publisher_Add } from "../../controllers";

export const route_Publisher_Add = Router();

route_Publisher_Add.post("/publisher", controller_Publisher_Add);

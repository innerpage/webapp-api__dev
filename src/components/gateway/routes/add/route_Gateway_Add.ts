import { Router } from "express";
import { controller_Gateway_Add } from "../../controllers";

export const route_Gateway_Add = Router();

route_Gateway_Add.post("/gateway", controller_Gateway_Add);

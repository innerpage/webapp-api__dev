import { Router } from "express";
import { testController } from "../../controllers";

export const testRoute = Router();

testRoute.post("/test", testController);

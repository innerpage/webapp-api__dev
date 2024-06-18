import { Router } from "express";
import { Request, Response } from "express";

export const testRoute = Router();

testRoute.get("/test", (req: Request, res: Response) => {
  res.send("API working");
});

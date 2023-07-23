import { Router } from "express";

export const getPurchasesRoute = Router();

getPurchasesRoute.post("/purchases", (req, res) => {
  res.send("HIT on purchases");
});

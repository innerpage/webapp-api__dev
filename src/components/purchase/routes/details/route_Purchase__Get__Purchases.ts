import { Router } from "express";

export const route_Purchase__Get__Purchases = Router();

route_Purchase__Get__Purchases.post("/purchases", (req, res) => {
  res.send("HIT on purchases");
});

import { Router } from "express";

export const route_Purchase_Get_AllPurchases = Router();

route_Purchase_Get_AllPurchases.post("/purchases", (req, res) => {
  res.send("HIT on purchases");
});

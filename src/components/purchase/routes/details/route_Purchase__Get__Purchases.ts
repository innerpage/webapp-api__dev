import { Router } from "express";

export const route_Purchase_Get_Purchases = Router();

route_Purchase_Get_Purchases.post("/purchases", (req, res) => {
  res.send("HIT on purchases");
});

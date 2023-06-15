import { Router } from "express";

export const route_Reader_Create_ReadingSession = Router();

route_Reader_Create_ReadingSession.post("/reader", (req, res) => {
  res.send("HIT on /reader");
});

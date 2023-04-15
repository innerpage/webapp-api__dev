import { Router } from "express";

export const route_Test_All = Router();

route_Test_All.get("/test", (req, res) => {
  // Date
  let date: any = new Date();
  date = date.toString();

  // Host & origin
  let host = req.header("Host");
  let origin = req.header("Origin");

  let payload_TestResults = {
    date: date,
    host: host,
    origin: origin,
  };

  return res.status(200).json({
    success: true,
    message: "Test all",
    payload: payload_TestResults,
  });
});

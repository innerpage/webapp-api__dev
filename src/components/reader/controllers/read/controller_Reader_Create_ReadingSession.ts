import { Request, Response } from "express";

export const controller_Reader_Create_ReadingSession = async (
  req: Request,
  res: Response
) => {
  // is document in DB?
  // read publication details
  // if (document has toc)
  //   read Toc
  // is document downloaded?
  // if (document not downloaded)
  //   download document
  // load document
  // create copy of page by pageNo
  // prepare payload (doc name, publication title + edition, pdf, toc)
  // write reading session (id, socket_id, document_id, is_active)
  // send payload

  return res.send("HIT on /reading-session");
};

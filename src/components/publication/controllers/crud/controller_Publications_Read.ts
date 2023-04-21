import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";

export const controller_Publications_Read = async (
  req: Request,
  res: Response
) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌ Could not find publisher");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publisher",
    });
  }

  const publications: any = await publisher.getPublications();
  if (!publications) {
    console.log("❌ Could not find publications");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publications",
    });
  }

  let payload: any = [];
  publications.map((publication: any) => {
    let obj: any = {
      id: publication.id,
      title: publication.title,
      sub_Title: publication.sub_title,
      description: publication.description,
      url_Sample: publication.url_sample,
      url_Toc: publication.url_toc,
      url_Cover: publication.url_cover,
      is_Published: publication.is_published,
    };
    payload.push(obj);
  });

  return res.status(200).json({
    success: true,
    message: "Publications fetched",
    payload: payload,
  });
};

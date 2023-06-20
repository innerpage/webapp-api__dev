import { Request, Response } from "express";
import { dal_Document_Read_With_Publication_By_Id } from "../../../document/dals";
import {
  helper_Reader_Get_Document_From_FS,
  helper_Reader_Download_Document,
} from "../../helpers";

import { PDFDocument } from "pdf-lib";

export const controller_Reader_Create_ReadingSession = async (
  req: Request,
  res: Response
) => {
  const documentAndPublication: any =
    await dal_Document_Read_With_Publication_By_Id(res.locals.id_Document);
  if (!documentAndPublication) {
    console.log("❌ Could not find document");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find document",
    });
  }
  const data_Toc: any = await documentAndPublication.getToc();
  const url_Doc: string = documentAndPublication.url;
  let file_As_Bytes: any = await helper_Reader_Get_Document_From_FS(
    res.locals.id_Document
  );
  if (!file_As_Bytes) {
    await helper_Reader_Download_Document(res.locals.id_Document, url_Doc);
    file_As_Bytes = await helper_Reader_Get_Document_From_FS(
      res.locals.id_Document
    );
  }
  const file = await PDFDocument.load(file_As_Bytes);
  const page_New = await PDFDocument.create();
  const [page_Copied] = await page_New.copyPages(file, [
    res.locals.no_Page - 1,
  ]);
  page_New.addPage(page_Copied);
  const base64Str_Page = await page_New.saveAsBase64();
  let obj_Return: any = {
    title_Publication: documentAndPublication.publication.title,
    edition_Publication: documentAndPublication.publication.edition,
    title_Document: documentAndPublication.title,
    toc: data_Toc ? data_Toc.toc : [],
    base64Str_Page: base64Str_Page,
  };
  return res.status(200).json({
    success: true,
    message: "Document details fetched",
    payload: obj_Return,
  });
};

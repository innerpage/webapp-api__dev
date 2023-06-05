import { PDFDocument } from "pdf-lib";
import fs from "fs";

export const helper_Document_Split_Pdf = async (
  file_Document: any,
  id_Document: string
) => {
  let array_Page_Paths: any = [];
  const bytes_Doc = await PDFDocument.load(file_Document.buffer);
  const count_DocPages = bytes_Doc.getPages().length;

  const name_Folder: string = `upload/${id_Document}`;
  fs.mkdirSync(name_Folder, { recursive: true });

  for (let i = 0; i < count_DocPages; i++) {
    const buff_Doc = await PDFDocument.create();
    const [copiedPage] = await buff_Doc.copyPages(bytes_Doc, [i]);
    buff_Doc.addPage(copiedPage);
    const pdfBytes = await buff_Doc.save();

    let path_Page: string = `upload/${id_Document}/${i + 1}.pdf`;
    let obj_Page = {
      path: path_Page,
      no: i + 1,
    };
    array_Page_Paths.push(obj_Page);
    await write_Pdf_To_File(path_Page, pdfBytes);
  }

  return array_Page_Paths;
};

const write_Pdf_To_File = (fileName: any, pdfBytes: any) => {
  return fs.promises.writeFile(fileName, pdfBytes);
};

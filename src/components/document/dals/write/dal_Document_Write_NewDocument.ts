import { model_Document } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Document_Write_NewDocument = async (
  title: string,
  url_Doc: string,
  id_Price: string,
  sl_no: number,
  id_Publication: string
) => {
  let isSuccess_NewDocument: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Document
    .create({
      title: title,
      url_doc: url_Doc,
      price_id: id_Price,
      sl_no: sl_no,
      publicationId: id_Publication,
    })
    .then((new_Document: any) => {
      isSuccess_NewDocument = true;
      payload = new_Document;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewDocument) {
    obj_Return.success = true;
    obj_Return.message = "New document CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New document NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};

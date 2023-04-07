import { model_Document } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Document_Write_NewDocument = async (
  title: string,
  sub_title: string,
  description: string,
  url: string,
  price_inr: number,
  price_usd: number,
  publisherId: string
) => {
  let isSuccess_NewDocument: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Document
    .create({
      title: title,
      sub_title: sub_title,
      description: description,
      url: url,
      price_inr: price_inr,
      price_usd: price_usd,
      publisherId: publisherId,
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

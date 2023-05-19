import { model_Purchase } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Purchase_Write_NewPurchase = async (
  id_Document: string,
  id_Purchase_Session: string,
  base_price: number,
  gateway_fees: number,
  tax_amount: number,
  total: number
) => {
  //   let isSuccess_NewDocument: boolean = false;
  //   let payload: any;
  //   let obj_Return: LooseObj = {};
  //   await model_Document
  //     .create({
  //       title: title,
  //       url_doc: url_Doc,
  //       price_inr: price_Inr,
  //       price_usd: price_Usd,
  //       sl_no: sl_no,
  //       publicationId: id_Publication,
  //     })
  //     .then((new_Document: any) => {
  //       isSuccess_NewDocument = true;
  //       payload = new_Document;
  //     })
  //     .catch((err) => {
  //       payload = err;
  //     });
  //   if (isSuccess_NewDocument) {
  //     obj_Return.success = true;
  //     obj_Return.message = "New document CREATED";
  //     obj_Return.payload = payload;
  //   } else {
  //     obj_Return.success = false;
  //     obj_Return.message = "New document NOT_CREATED";
  //     obj_Return.payload = payload;
  //   }
  //   return obj_Return;
};

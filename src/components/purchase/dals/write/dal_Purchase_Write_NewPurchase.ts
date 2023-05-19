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
  let isSuccess_NewPurchase: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Purchase
    .create({
      id_Document: id_Document,
      id_Purchase_Session: id_Purchase_Session,
      base_price: base_price,
      gateway_fees: gateway_fees,
      tax_amount: tax_amount,
      total: total,
    })
    .then((new_Purchase: any) => {
      isSuccess_NewPurchase = true;
      payload = new_Purchase;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewPurchase) {
    obj_Return.success = true;
    obj_Return.message = "New purchase CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New purchase NOT_CREATED";
    obj_Return.payload = payload;
  }
  return obj_Return;
};

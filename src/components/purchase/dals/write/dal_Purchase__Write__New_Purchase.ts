import { model_Purchase } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Purchase__Write__New_Purchase = async (
  id_Document: string,
  id_Session: string,
  currency: string,
  paid_Amount: number,
  id_Account: string
) => {
  let isSuccess_NewPurchase: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Purchase
    .create({
      document_id: id_Document,
      session_id: id_Session,
      currency: currency,
      amount_paid: paid_Amount,
      accountId: id_Account,
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

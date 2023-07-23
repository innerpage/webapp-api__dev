import { purchaseModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const writeNewPurchase = async (
  documentId: string,
  sessionId: string,
  currency: string,
  paid_Amount: number,
  accountId: string
) => {
  let isSuccess_NewPurchase: boolean = false;
  let payload: any;
  let returnObject: obj_Loose = {};

  await purchaseModel
    .create({
      document_id: documentId,
      session_id: sessionId,
      currency: currency,
      amount_paid: paid_Amount,
      accountId: accountId,
    })
    .then((new_Purchase: any) => {
      isSuccess_NewPurchase = true;
      payload = new_Purchase;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewPurchase) {
    returnObject.success = true;
    returnObject.message = "New purchase CREATED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "New purchase NOT_CREATED";
    returnObject.payload = payload;
  }
  return returnObject;
};

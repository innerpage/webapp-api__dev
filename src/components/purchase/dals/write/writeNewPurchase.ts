import { purchaseModel } from "../../models";

interface LooseObject {
  [key: string]: any;
}

export const writeNewPurchase = async (
  productId: string,
  sessionId: string,
  currency: string,
  amount: number,
  accountId: string
) => {
  let isNewPurchaseCreated: boolean = false;
  let payload: any;
  let returnObject: LooseObject = {};

  await purchaseModel
    .create({
      product_id: productId,
      session_id: sessionId,
      currency: currency,
      amount: amount,
      accountId: accountId,
    })
    .then((newPurchase: any) => {
      isNewPurchaseCreated = true;
      payload = newPurchase;
    })
    .catch((err) => {
      payload = err;
    });

  if (isNewPurchaseCreated) {
    returnObject.success = true;
    returnObject.message = "New purchase created";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "New purchase not created";
    returnObject.payload = payload;
  }
  return returnObject;
};

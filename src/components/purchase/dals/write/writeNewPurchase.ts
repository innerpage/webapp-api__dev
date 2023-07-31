import { purchaseModel } from "../../models";

export const writeNewPurchase = async (
  productId: string,
  sessionId: string,
  currency: string,
  amount: number,
  accountId: string
) => {
  let isNewPurchaseCreated: boolean = false;
  let payload: any;

  await purchaseModel
    .create({
      productId: productId,
      sessionId: sessionId,
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
    return {
      success: true,
      message: "✅ New purchase created",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ New purchase not created",
      payload: payload,
    };
  }
};

import { Var } from "../../../../global/var";
import { purchaseModel } from "../../models";

export const writeNewPurchase = async (
  productId: string,
  sessionId: string,
  currency: string,
  amount: number,
  accountId: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await purchaseModel
    .create({
      productId: productId,
      sessionId: sessionId,
      currency: currency,
      amount: amount,
      accountId: accountId,
    })
    .then((newPurchase: any) => {
      isSuccessful = true;
      returnData = newPurchase;
    })
    .catch((err: any) => {
      returnData = err;
    });

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Purchase read`
      : `${Var.app.emoji.failure} Could not read purchase. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};

import { Var } from "../../../../global/var";
import { purchaseModel } from "../../models";

export const writePurchaseStatus = async (sessionId: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await purchaseModel
    .update(
      { isSuccess: true },
      {
        where: {
          sessionId: sessionId,
        },
      }
    )
    .then((updatedPurchase: any) => {
      isSuccessful = true;
      returnData = updatedPurchase;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Purchase read`
      : `${Var.app.emoji.failure} Could not read purchase. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};

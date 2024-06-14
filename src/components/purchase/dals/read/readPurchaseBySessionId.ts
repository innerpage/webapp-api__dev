import { Var } from "../../../../global/var";
import { purchaseModel } from "../../models";

export const readPurchaseBySessionId = async (sessionId: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await purchaseModel
    .findOne({
      where: {
        sessionId: sessionId,
      },
    })
    .then((purchase: any) => {
      isSuccessful = true;
      returnData = purchase;
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

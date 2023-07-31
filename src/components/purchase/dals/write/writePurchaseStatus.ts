import { purchaseModel } from "../../models";

export const writePurchaseStatus = async (sessionId: string) => {
  let isPurchaseStatusUpdated: boolean = false;
  let payload: any;

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
      isPurchaseStatusUpdated = true;
      payload = updatedPurchase;
    })
    .catch((err) => (payload = err));

  if (isPurchaseStatusUpdated) {
    return {
      success: true,
      message: "✅ Purchase status updated",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ Purchase status not update",
      payload: payload,
    };
  }
};

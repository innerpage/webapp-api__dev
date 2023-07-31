import { purchaseModel } from "../../models";

export const readPurchaseBySessionId = async (sessionId: string) => {
  let payload: any;

  await purchaseModel
    .findOne({
      where: {
        sessionId: sessionId,
      },
    })
    .then((purchase: any) => {
      payload = purchase;
    })
    .catch((err) => (payload = err));

  if (payload) {
    return {
      success: true,
      message: "✅ Purchase read",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ Purchase not read",
      payload: payload,
    };
  }
};

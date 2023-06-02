import { model_Purchase } from "../../../purchase/models";

export const dal_Readings_GetAll_By_AccountId = async (id_Account: string) => {
  const account = await model_Purchase.findAll({
    attributes: ["document_id"],
    where: {
      accountId: id_Account,
      is_success: true,
    },
  });

  return account;
};

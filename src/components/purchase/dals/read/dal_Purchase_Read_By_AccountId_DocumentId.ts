import { model__Purchase } from "../../models";

export const dal_Purchase_Read_By_AccountId_DocumentId = async (
  id_Account: string,
  id_Document: string
) => {
  const purchase: any = await model__Purchase.findOne({
    where: {
      accountId: id_Account,
      document_id: id_Document,
    },
  });

  return purchase;
};

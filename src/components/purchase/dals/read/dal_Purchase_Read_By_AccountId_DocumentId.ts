import { model_Purchase } from "../../models";

export const dal_Purchase_Read_By_AccountId_DocumentId = async (
  id_Account: string,
  id_Document: string
) => {
  const purchase:any = await model_Purchase.findOne({
    where: {
      accountId: id_Account,
      document_id: id_Document,
    },
  });

  return purchase;
};

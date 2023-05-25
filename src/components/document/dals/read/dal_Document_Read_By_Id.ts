import { model_Document } from "../../models";

export const dal_Document_Read_By_Id = async (id_Document: string) => {
  const document: any = await model_Document.findOne({
    where: {
      id: id_Document,
    },
  });

  return document;
};

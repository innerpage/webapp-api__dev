import { model_Publication } from "../../../publication/models";
import { model_Document } from "../../models";

export const dal_Document_Read_With_Publication_By_Id = async (
  id_Document: string
) => {
  const document_With_Publication = await model_Document.findOne({
    where: {
      id: id_Document,
    },
    include: {
      model: model_Publication,
    },
  });

  return document_With_Publication;
};

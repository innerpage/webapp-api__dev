import { model_Document } from "../../models";
import { model_Publication } from "../../../publication/models";

export const dal_Document_Read_By_Ids = async (
  array_Ids: any,
  array_Attributes: any
) => {
  const document: any = await model_Document.findAll({
    attributes: array_Attributes,
    where: {
      id: array_Ids,
    },
    include: {
      model: model_Publication,
      attributes: ["title", "edition", "url_sample", "url_toc", "url_cover"],
    },
  });

  return document;
};

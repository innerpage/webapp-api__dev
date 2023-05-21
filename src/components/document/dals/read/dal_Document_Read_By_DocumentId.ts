import { model_Publication } from "../../../publication/models";
import { model_Document } from "../../models";

export const dal_Document_Read_By_DocumentId = async (id_Document: string) => {
  const publications_And_Documents = await model_Document.findOne({
    attributes: ["id", "title"],
    where: {
      id: id_Document,
    },
    include: {
      model: model_Publication,
      attributes: [
        "id",
        "title",
        "edition",
        "description",
        "url_sample",
        "url_toc",
        "url_cover",
        "publisherId",
      ],
    },
  });

  return publications_And_Documents;
};

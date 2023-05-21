import { model_Publication } from "../../models";
import { model_Document } from "../../../document/models";

export const dal_Publications_Documents_Read_By_PublisherId = async (
  id_Publisher: string
) => {
  const publications_And_Documents = await model_Publication.findAll({
    attributes: [
      "id",
      "title",
      "edition",
      "description",
      "url_sample",
      "url_toc",
      "url_cover",
    ],
    where: {
      publisherId: id_Publisher,
    },
    order: [["createdAt", "DESC"]],
    include: {
      model: model_Document,
      attributes: ["id", "title", "sl_no"],
      order: [["createdAt", "INCR"]],
    },
  });

  return publications_And_Documents;
};

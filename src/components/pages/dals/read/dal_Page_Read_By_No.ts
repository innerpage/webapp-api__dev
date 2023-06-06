import { model_Page } from "../../models";

export const dal_Page_Read_By_No = async (
  id_Document: any,
  no_Page: number
) => {
  const page: any = await model_Page.findOne({
    where: {
      documentId: id_Document,
      no: no_Page,
    },
  });

  return page;
};

import { model_Publication } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Publication_Write = async (
  title: string,
  edition: string,
  description: string,
  url_sample: string,
  url_toc: string,
  url_cover: string,
  publisherId: string
) => {
  let isSuccess_Write_NewPublication: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Publication
    .create({
      title: title,
      edition: edition,
      description: description,
      url_sample: url_sample,
      url_toc: url_toc,
      url_cover: url_cover,
      is_published: true,
      publisherId: publisherId,
    })
    .then((new_Publication: any) => {
      isSuccess_Write_NewPublication = true;
      payload = new_Publication;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_Write_NewPublication) {
    obj_Return.success = true;
    obj_Return.message = "New publication CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New publication NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};

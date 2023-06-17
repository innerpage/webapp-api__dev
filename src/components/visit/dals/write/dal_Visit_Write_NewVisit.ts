import { model_Visit } from "../../models";

export const dal_Visit_Write_NewVisit = async (
  email: string,
  id_Socket: string
) => {
  await model_Visit
    .create({
      email: email,
      socket_id: id_Socket,
    })
    .then((new_Visit: any) => {
      console.log();
      console.log(`Connection SAVED: ${email} (${id_Socket})`);
      console.log(new_Visit.dataValues);
      console.log();
    })
    .catch((err) => {
      console.log();
      console.log(`Connection NOT_SAVED: ${email} (${id_Socket})`);
      console.log(err);
      console.log();
    });
};

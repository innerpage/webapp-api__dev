import { model__Visit } from "../../models";

export const dal_Visit__Write__New_Visit = async (
  email: string,
  id_Socket: string
) => {
  await model__Visit
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

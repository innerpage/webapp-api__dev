import { visitModel } from "../../models";

export const writeNewVisit = async (email: string, socketId: string) => {
  await visitModel
    .create({
      email: email,
      socket_id: socketId,
    })
    .then((new_Visit: any) => {
      console.log(`✅ Connection SAVED: ${email} (${socketId})`);
      console.log(new_Visit.dataValues);
    })
    .catch((err: any) => {
      console.log(`❌ Connection NOT_SAVED: ${email} (${socketId})`);
      console.log(err);
    });
};

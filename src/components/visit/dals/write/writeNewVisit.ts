import { visitModel } from "../../models";

export const writeNewVisit = async (email: string, socketId: string) => {
  await visitModel
    .create({
      email: email,
      socket_id: socketId,
    })
    .then((newVisit: any) => {
      console.log(`✅ Connection saved: ${email} (${socketId})`);
      console.log(newVisit.dataValues);
    })
    .catch((err: any) => {
      console.log(`❌ Connection not saved: ${email} (${socketId})`);
      console.log(err);
    });
};

import { visitModel } from "../../models";

export const writeNewVisit = async (email: string, socketId: string) => {
  await visitModel
    .create({
      email: email,
      socketId: socketId,
    })
    .then((newVisit: any) => {
      console.log(`✅ Visit saved: ${email} (${socketId})`);
      console.log(newVisit.dataValues);
    })
    .catch((err: any) => {
      console.log(`❌ Visit not saved: ${email} (${socketId})`);
      console.log(err);
    });
};

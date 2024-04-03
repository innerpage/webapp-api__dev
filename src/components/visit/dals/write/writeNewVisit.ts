import { visitModel } from "../../models";

export const writeNewVisit = async (
  email: string,
  socketId: string,
  ipAddress: string
) => {
  await visitModel
    .create({
      email: email,
      socket_id: socketId,
      ip_address: ipAddress,
    })
    .then((newVisit: any) => {
      if (!newVisit) {
        console.log(`❌ Visit not saved: ${email} (${socketId})`);
      }
      console.log(`✅ Visit saved: ${email} (${socketId})`);
    })
    .catch((err: any) => {
      console.log(`❌ Visit not saved: ${email} (${socketId})`);
      console.log(err);
    });
};

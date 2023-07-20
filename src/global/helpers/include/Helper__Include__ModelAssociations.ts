import { model_Account } from "../../../components/account/models";
import { model_Purchase } from "../../../components/purchase/models";

export const Helper__Include__ModelAssociations = () => {
  model_Account.hasMany(model_Purchase);
  model_Purchase.belongsTo(model_Account);
};

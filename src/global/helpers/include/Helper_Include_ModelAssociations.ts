// Model imports
import { model_Account } from "../../../components/account/models";
import { model_Gateway } from "../../../components/gateway/models";
import { model_Purchase } from "../../../components/purchase/models";

export const Helper_Include_ModelAssociations = () => {
  // Account - Purchase Association
  model_Account.hasMany(model_Purchase);
  model_Purchase.belongsTo(model_Account);

  // Publisher - Gateway Associations
  model_Account.hasOne(model_Gateway);
  model_Gateway.belongsTo(model_Account);
};

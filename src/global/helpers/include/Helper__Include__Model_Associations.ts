import { model_Account } from "../../../components/account/models";
import { model_Purchase } from "../../../components/purchase/models";

export const Helper_Include_Model_Associations = () => {
  // Account - Purchase Association
  model_Account.hasMany(model_Purchase);
  model_Purchase.belongsTo(model_Account);
};
import { model__Account } from "../../../components/account/models";
import { model__Purchase } from "../../../components/purchase/models";

export const Helper__Include__Model_Associations = () => {
  // Account - Purchase Association
  model__Account.hasMany(model__Purchase);
  model__Purchase.belongsTo(model__Account);
};

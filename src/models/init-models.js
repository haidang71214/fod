import { DataTypes } from "sequelize";
import foodModel from "./food.js";
import foodTypeModel from "./food_type.js";
import likeResModel from "./like_res.js";
import orderModel from "./orderr.js";
import rateResModel from "./rate_res.js";
import restaurantModel from "./restaurant.js";
import subFoodModel from "./sub_food.js";
import userModel from "./userr.js";

const init_models = (sequelize) => {
  const food = foodModel(sequelize, DataTypes);
  const food_type = foodTypeModel(sequelize, DataTypes);
  const like_res = likeResModel(sequelize, DataTypes);
  const orderr = orderModel(sequelize, DataTypes);
  const rate_res = rateResModel(sequelize, DataTypes);
  const restaurant = restaurantModel(sequelize, DataTypes);
  const sub_food = subFoodModel(sequelize, DataTypes);
  const userr = userModel(sequelize, DataTypes);
//:(( )
  // Định nghĩa các mối quan hệ
  orderr.belongsTo(food, { as: "food", foreignKey: "food_id" });
  food.hasMany(orderr, { as: "orderrs", foreignKey: "food_id" });
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id" });
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id" });
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id" });
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id" });
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id" });
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id" });
  like_res.belongsTo(userr, { as: "user", foreignKey: "user_id" });
  userr.hasMany(like_res, { as: "like_res", foreignKey: "user_id" });
  orderr.belongsTo(userr, { as: "user", foreignKey: "user_id" });
  userr.hasMany(orderr, { as: "orderrs", foreignKey: "user_id" });
  rate_res.belongsTo(userr, { as: "user", foreignKey: "user_id" });
  userr.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id" });

  return {
    food,
    food_type,
    like_res,
    orderr,
    rate_res,
    restaurant,
    sub_food,
    userr,
  };
};

export default init_models;

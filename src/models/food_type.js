import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class FoodType extends Model {}

  FoodType.init({
    type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Giữ nguyên khóa chính nếu cần
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'food_type',
    tableName: 'food_type',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['type_id'] // Giữ lại trường này nếu bạn cần
      }
    ]
  });

  return FoodType;
};

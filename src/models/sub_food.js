import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class SubFood extends Model {}

  SubFood.init({
    sub_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Đặt sub_id là khóa chính
    },
    sub_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'food',
        key: 'food_id'
      }
    }
  }, {
    sequelize,
    modelName: 'sub_food',
    tableName: 'sub_food',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['sub_id']
      },
      {
        name: 'food_id',
        using: 'BTREE',
        fields: ['food_id']
      },
    ]
  });

  return SubFood;
};

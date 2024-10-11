import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class Food extends Model {}

  Food.init({
    food_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Giữ khóa chính ở đây nếu cần
    },
    food_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'food_type',
        key: 'type_id'
      }
    }
  }, {
    sequelize,
    modelName: 'food',
    tableName: 'food',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['food_id'] // Giữ lại khóa chính ở đây
      },
      {
        name: 'type_id',
        using: 'BTREE',
        fields: ['type_id']
      }
    ]
  });

  return Food;
};

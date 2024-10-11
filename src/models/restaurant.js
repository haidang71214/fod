import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class Restaurant extends Model {}

  Restaurant.init({
    res_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Đặt res_id là khóa chính
    },
    res_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'restaurant',
    tableName: 'restaurant',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['res_id']
      },
    ]
  });

  return Restaurant;
};

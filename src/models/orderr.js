import { DataTypes, Model } from 'sequelize';

const Orderr = (sequelize, DataTypes) => {
  const Orderr = sequelize.define('orderr', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, // Đặt user_id là một phần của khóa chính
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, // Đặt food_id là một phần của khóa chính
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arr_sub_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    tableName: 'orderr',
    timestamps: false,
  });

  return Orderr;
};
export default Orderr

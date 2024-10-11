import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class User extends Model {}

  User.init({
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Đặt user_id là khóa chính
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'userr',
    tableName: 'userr',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['user_id']
      },
    ]
  });

  return User;
};

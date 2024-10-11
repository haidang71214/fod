import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class LikeRes extends Model {}

  LikeRes.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'userr',
        key: 'user_id'
      },
      primaryKey: true // Đặt là khóa chính
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurant',
        key: 'res_id'
      },
      primaryKey: true // Đặt là khóa chính
    },
    date_like: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'LikeRes', // Đặt tên mô hình với chữ cái đầu hoa
    tableName: 'like_res',
    timestamps: false,
    indexes: [
      {
        name: 'user_id',
        using: 'BTREE',
        fields: ['user_id']
      },
      {
        name: 'res_id',
        using: 'BTREE',
        fields: ['res_id']
      }
    ],
  });

  return LikeRes;
};

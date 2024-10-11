import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class RateRes extends Model {}

  RateRes.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'userr',
        key: 'user_id'
      },
      primaryKey:'true'
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'restaurant',
        key: 'res_id'
      },
      primaryKey:'true'
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_rate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'rate_res',
    tableName: 'rate_res',
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
      },
    ]
  });

  return RateRes;
};

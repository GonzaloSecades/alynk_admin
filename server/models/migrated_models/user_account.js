const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_account', {
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountId" },
          { name: "userId" },
        ]
      },
      {
        name: "IDX_d681a74722b577ba983124a55f",
        using: "BTREE",
        fields: [
          { name: "accountId" },
        ]
      },
      {
        name: "IDX_08023c572a6a0a22798c56d6c1",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};

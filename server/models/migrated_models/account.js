const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(140),
      allowNull: false,
      unique: "IDX_0e36495153a7b5878e6ff25ec9"
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cuit: {
      type: DataTypes.STRING(14),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_0e36495153a7b5878e6ff25ec9",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alias" },
        ]
      },
    ]
  });
};

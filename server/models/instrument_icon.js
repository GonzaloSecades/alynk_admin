const S = require('sequelize');
const db = require('../db/index')
class instrument_icon extends S.Model{}

instrument_icon.init({
    id: {
      autoIncrement: true,
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticker: {
      type: S.STRING(200),
      allowNull: false
    },
    url: {
      type: S.STRING(1000),
      allowNull: false
    }

  }
  , {
    sequelize:db,
    tableName: 'instrument_icon',
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
    ]
  });

  module.exports = instrument_icon
  
 

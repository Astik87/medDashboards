const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_urlpreview_route', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ROUTE: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      unique: "UX_URLPREVIEW_ROUTE_ROUTE"
    },
    MODULE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CLASS: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    PARAMETERS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_urlpreview_route',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "UX_URLPREVIEW_ROUTE_ROUTE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ROUTE", length: 255 },
        ]
      },
    ]
  });
};

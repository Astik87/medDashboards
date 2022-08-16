const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_short_uri', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    URI: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    URI_CRC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SHORT_URI: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    SHORT_URI_CRC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 301
    },
    MODIFIED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LAST_USED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NUMBER_USED: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_short_uri',
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
        name: "ux_b_short_uri_1",
        using: "BTREE",
        fields: [
          { name: "SHORT_URI_CRC" },
        ]
      },
      {
        name: "ux_b_short_uri_2",
        using: "BTREE",
        fields: [
          { name: "URI_CRC" },
        ]
      },
    ]
  });
};

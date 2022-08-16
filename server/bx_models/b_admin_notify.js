const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_admin_notify', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ENABLE_CLOSE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    PUBLIC_SECTION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    NOTIFY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "M"
    }
  }, {
    sequelize,
    tableName: 'b_admin_notify',
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
        name: "IX_AD_TAG",
        using: "BTREE",
        fields: [
          { name: "TAG" },
        ]
      },
    ]
  });
};

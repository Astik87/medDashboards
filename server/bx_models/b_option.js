const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_option', {
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "NAME" },
        ]
      },
      {
        name: "ix_option_name",
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};

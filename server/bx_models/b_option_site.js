const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_option_site', {
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
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_option_site',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "NAME" },
          { name: "SITE_ID" },
        ]
      },
      {
        name: "ix_option_site_module_site",
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};

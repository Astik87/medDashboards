const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_module_group', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    G_ACCESS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_module_group',
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
        name: "UK_GROUP_MODULE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "GROUP_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};

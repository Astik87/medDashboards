const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_site_template', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    CONDITION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    TEMPLATE: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_site_template',
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
        name: "ix_site_template_site",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};

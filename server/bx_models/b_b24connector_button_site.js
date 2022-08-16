const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_b24connector_button_site', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BUTTON_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_b24connector_button_site',
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
        name: "IX_BUTTON_ID",
        using: "BTREE",
        fields: [
          { name: "BUTTON_ID" },
        ]
      },
    ]
  });
};

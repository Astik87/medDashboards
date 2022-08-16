const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_b24connector_buttons', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ADD_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ADD_BY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SCRIPT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_b24connector_buttons',
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
    ]
  });
};

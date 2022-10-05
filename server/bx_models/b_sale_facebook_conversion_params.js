const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sale_facebook_conversion_params', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    EVENT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    ENABLED: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    PARAMS: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_sale_facebook_conversion_params',
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
        name: "IX_FACEBOOK_CONVERSION_EVENT_NAME_LID",
        using: "BTREE",
        fields: [
          { name: "EVENT_NAME" },
          { name: "LID" },
        ]
      },
    ]
  });
};

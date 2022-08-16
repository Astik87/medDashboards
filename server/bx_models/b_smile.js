const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_smile', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S"
    },
    SET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150
    },
    TYPING: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLICKABLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    HIDDEN: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    IMAGE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    IMAGE_DEFINITION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "SD"
    },
    IMAGE_WIDTH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    IMAGE_HEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_smile',
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_numerator', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TEMPLATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UPDATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_numerator',
    timestamps: true,
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

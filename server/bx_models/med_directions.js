const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('med_directions', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_XML_ID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_COLOR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SORT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ACT_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_UNACT_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_NAME_EN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_MAIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_FULL_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TOB24: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'med_directions',
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

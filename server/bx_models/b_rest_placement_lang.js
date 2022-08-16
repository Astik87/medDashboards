const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_placement_lang', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PLACEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LANGUAGE_ID: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GROUP_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_placement_lang',
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
        name: "b_rest_placement_lang_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PLACEMENT_ID" },
          { name: "LANGUAGE_ID" },
        ]
      },
    ]
  });
};

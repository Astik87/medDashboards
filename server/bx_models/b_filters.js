const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_filters', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILTER_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FIELDS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    COMMON: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PRESET: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    PRESET_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SORT_FIELD: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_filters',
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

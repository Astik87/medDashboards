const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_favorite', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    C_SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    MODIFIED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COMMON: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    MENU_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_favorite',
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

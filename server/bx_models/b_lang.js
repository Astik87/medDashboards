const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_lang', {
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    DEF: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DIR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FORMAT_DATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMAT_DATETIME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMAT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WEEK_START: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CHARSET: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    DOC_ROOT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DOMAIN_LIMITED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SERVER_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SITE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CULTURE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_lang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LID" },
        ]
      },
    ]
  });
};

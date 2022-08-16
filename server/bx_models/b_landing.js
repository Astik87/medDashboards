const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INITIATOR_APP_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RULE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    DELETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    PUBLIC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SYS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TPL_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TPL_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SITEMAP: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    FOLDER: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    FOLDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEARCH_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    CREATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODIFIED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    DATE_PUBLIC: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_landing',
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
        name: "IX_B_LAND_CODE",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
      {
        name: "IX_B_LAND_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_LAND_DELETED",
        using: "BTREE",
        fields: [
          { name: "DELETED" },
        ]
      },
      {
        name: "IX_B_LAND_SYS",
        using: "BTREE",
        fields: [
          { name: "SYS" },
        ]
      },
      {
        name: "IX_B_LAND_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "IX_B_LAND_SITEMAP",
        using: "BTREE",
        fields: [
          { name: "SITEMAP" },
        ]
      },
      {
        name: "IX_B_LAND_FOLDER",
        using: "BTREE",
        fields: [
          { name: "FOLDER" },
        ]
      },
      {
        name: "IX_B_LAND_FOLDER_ID",
        using: "BTREE",
        fields: [
          { name: "FOLDER_ID" },
        ]
      },
      {
        name: "IX_B_LANDING_SEARCH",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_CONTENT" },
        ]
      },
    ]
  });
};

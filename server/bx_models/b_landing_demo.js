const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_demo', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    APP_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    TYPE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    TPL_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    SHOW_IN_LIST: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIEW_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIEW: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIEW2X: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIEW3X: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MANIFEST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LANG: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SITE_TEMPLATE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'b_landing_demo',
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
        name: "IX_B_DEMO_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_DEMO_SHOW_IN_LIST",
        using: "BTREE",
        fields: [
          { name: "SHOW_IN_LIST" },
        ]
      },
      {
        name: "IX_B_DEMO_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "IX_B_DEMO_APP_CODE",
        using: "BTREE",
        fields: [
          { name: "APP_CODE" },
        ]
      },
      {
        name: "IX_B_DEMO_TEMPLATE_ID",
        using: "BTREE",
        fields: [
          { name: "SITE_TEMPLATE_ID" },
        ]
      },
    ]
  });
};

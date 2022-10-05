const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_site', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "PAGE"
    },
    TPL_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TPL_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DOMAIN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SMN_SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    LANDING_ID_INDEX: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LANDING_ID_404: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LANDING_ID_503: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LANG: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SPECIAL: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
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
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_landing_site',
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
        name: "IX_B_SITE_CODE",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
      {
        name: "IX_B_SITE_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_SITE_DELETED",
        using: "BTREE",
        fields: [
          { name: "DELETED" },
        ]
      },
      {
        name: "IX_B_SITE_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "IX_B_SITE_SPECIAL",
        using: "BTREE",
        fields: [
          { name: "SPECIAL" },
        ]
      },
    ]
  });
};

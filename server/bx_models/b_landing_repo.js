const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_repo', {
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
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SECTIONS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SITE_TEMPLATE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PREVIEW: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MANIFEST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'b_landing_repo',
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
        name: "IX_B_REPO_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_REPO_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "IX_B_REPO_APP_CODE",
        using: "BTREE",
        fields: [
          { name: "APP_CODE" },
        ]
      },
      {
        name: "IX_B_REPO_TEMPLATE_ID",
        using: "BTREE",
        fields: [
          { name: "SITE_TEMPLATE_ID" },
        ]
      },
    ]
  });
};

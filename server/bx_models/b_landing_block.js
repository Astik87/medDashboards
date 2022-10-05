const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_block', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INITIATOR_APP_CODE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ANCHOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 500
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    PUBLIC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    DELETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ACCESS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "X"
    },
    SOURCE_PARAMS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SEARCH_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ASSETS: {
      type: DataTypes.TEXT,
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
    },
    DESIGNED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    CODE_ORIGINAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TPL_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FAVORITE_META: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_landing_block',
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
        name: "IX_B_BLOCK_LID",
        using: "BTREE",
        fields: [
          { name: "LID" },
        ]
      },
      {
        name: "IX_B_BLOCK_CODE",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
      {
        name: "IX_B_BLOCK_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_BLOCK_DELETED",
        using: "BTREE",
        fields: [
          { name: "DELETED" },
        ]
      },
      {
        name: "IX_B_BLOCK_CREATE_PUBLIC",
        using: "BTREE",
        fields: [
          { name: "PUBLIC" },
          { name: "DATE_CREATE" },
        ]
      },
      {
        name: "IX_B_BLOCK_LID_PUBLIC",
        using: "BTREE",
        fields: [
          { name: "LID" },
          { name: "PUBLIC" },
        ]
      },
      {
        name: "IX_B_BLOCK_SEARCH",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_CONTENT" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_CHANGE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITEM_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CUSTOM_RANK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENTITY_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BODY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TAGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PARAM1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PARAM2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UPD: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    DATE_FROM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_TO: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_content',
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
        name: "UX_B_SEARCH_CONTENT",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "ITEM_ID" },
        ]
      },
      {
        name: "IX_B_SEARCH_CONTENT_1",
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "PARAM1", length: 50 },
          { name: "PARAM2", length: 50 },
        ]
      },
      {
        name: "IX_B_SEARCH_CONTENT_2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID", length: 50 },
          { name: "ENTITY_TYPE_ID" },
        ]
      },
    ]
  });
};

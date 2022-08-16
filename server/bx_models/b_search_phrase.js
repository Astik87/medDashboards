const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_phrase', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    RESULT_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PAGES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SESSION_ID: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    PHRASE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TAGS: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    URL_TO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    URL_TO_404: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    URL_TO_SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    STAT_SESS_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EVENT1: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_phrase',
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
        name: "IND_PK_B_SEARCH_PHRASE_SESS_PH",
        using: "BTREE",
        fields: [
          { name: "SESSION_ID" },
          { name: "PHRASE", length: 50 },
        ]
      },
      {
        name: "IND_PK_B_SEARCH_PHRASE_SESS_TG",
        using: "BTREE",
        fields: [
          { name: "SESSION_ID" },
          { name: "TAGS", length: 50 },
        ]
      },
      {
        name: "IND_PK_B_SEARCH_PHRASE_TIME",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};

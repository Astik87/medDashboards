const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_suggest', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    FILTER_MD5: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    PHRASE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    RATE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RESULT_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_suggest',
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
        name: "IND_B_SEARCH_SUGGEST",
        using: "BTREE",
        fields: [
          { name: "FILTER_MD5" },
          { name: "PHRASE", length: 50 },
          { name: "RATE" },
        ]
      },
      {
        name: "IND_B_SEARCH_SUGGEST_PHRASE",
        using: "BTREE",
        fields: [
          { name: "PHRASE", length: 50 },
          { name: "RATE" },
        ]
      },
      {
        name: "IND_B_SEARCH_SUGGEST_TIME",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};

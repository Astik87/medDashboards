const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_search_engine', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ux_b_seo_search_engine_code"
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CLIENT_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLIENT_SECRET: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REDIRECT_URI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_seo_search_engine',
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
        name: "ux_b_seo_search_engine_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
    ]
  });
};

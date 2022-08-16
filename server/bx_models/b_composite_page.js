const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_composite_page', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CACHE_KEY: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    HOST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    URI: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CHANGED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LAST_VIEWED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    REWRITES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SIZE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_composite_page',
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
        name: "IX_B_COMPOSITE_PAGE_CACHE_KEY",
        using: "BTREE",
        fields: [
          { name: "CACHE_KEY", length: 100 },
        ]
      },
      {
        name: "IX_B_COMPOSITE_PAGE_VIEWED",
        using: "BTREE",
        fields: [
          { name: "LAST_VIEWED" },
        ]
      },
      {
        name: "IX_B_COMPOSITE_PAGE_HOST",
        using: "BTREE",
        fields: [
          { name: "HOST" },
        ]
      },
    ]
  });
};

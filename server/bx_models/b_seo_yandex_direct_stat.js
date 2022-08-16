const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_yandex_direct_stat', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CAMPAIGN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BANNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_DAY: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CURRENCY: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SUM: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    SUM_SEARCH: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    SUM_CONTEXT: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    CLICKS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CLICKS_SEARCH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CLICKS_CONTEXT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SHOWS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SHOWS_SEARCH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SHOWS_CONTEXT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_seo_yandex_direct_stat',
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
        name: "ux_seo_yandex_direct_stat",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BANNER_ID" },
          { name: "DATE_DAY" },
        ]
      },
      {
        name: "ix_seo_yandex_direct_stat1",
        using: "BTREE",
        fields: [
          { name: "CAMPAIGN_ID" },
        ]
      },
    ]
  });
};

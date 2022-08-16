const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_order', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENGINE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    CAMPAIGN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BANNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SUM: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    PROCESSED: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_order',
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
        name: "ux_b_seo_adv_order",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENGINE_ID" },
          { name: "CAMPAIGN_ID" },
          { name: "BANNER_ID" },
          { name: "ORDER_ID" },
        ]
      },
      {
        name: "ix_b_seo_adv_order1",
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
          { name: "PROCESSED" },
        ]
      },
    ]
  });
};

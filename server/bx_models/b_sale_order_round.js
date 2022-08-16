const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sale_order_round', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    APPLY_BLOCK_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ORDER_ROUND: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APPLY: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ROUND_RULE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_sale_order_round',
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
        name: "IX_SALE_ORDER_ROUND_ORD",
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
        ]
      },
    ]
  });
};

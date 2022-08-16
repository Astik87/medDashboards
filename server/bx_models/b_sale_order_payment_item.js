const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sale_order_payment_item', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PAYMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    QUANTITY: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sale_order_payment_item',
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
        name: "IX_S_O_PI_ENTITY_ID_TYPE",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sale_exchange_log', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OWNER_ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENTITY_DATE_UPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    XML_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MARKED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DIRECTION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PROVIDER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_sale_exchange_log',
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
        name: "IX_EXCHANGE_LOG1",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE_ID" },
        ]
      },
      {
        name: "IX_EXCHANGE_LOG2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_DATE_UPDATE" },
        ]
      },
      {
        name: "IX_EXCHANGE_LOG3",
        using: "BTREE",
        fields: [
          { name: "DATE_INSERT" },
        ]
      },
    ]
  });
};

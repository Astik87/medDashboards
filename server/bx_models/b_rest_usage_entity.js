const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_usage_entity', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUB_ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SUB_ENTITY_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_usage_entity',
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
        name: "ix_b_rest_usage_entity",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE" },
          { name: "ENTITY_ID" },
          { name: "SUB_ENTITY_TYPE" },
          { name: "SUB_ENTITY_NAME" },
        ]
      },
    ]
  });
};

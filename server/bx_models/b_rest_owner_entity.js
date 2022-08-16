const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_owner_entity', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OWNER_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    OWNER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    ENTITY: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rest_owner_entity',
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
        name: "ix_b_rest_owner_entity",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE" },
          { name: "ENTITY" },
        ]
      },
    ]
  });
};

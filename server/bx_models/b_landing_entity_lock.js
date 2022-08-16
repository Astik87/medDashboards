const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_entity_lock', {
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
    ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    LOCK_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_landing_entity_lock',
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
        name: "IX_ENTITY",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
      {
        name: "IX_TYPE",
        using: "BTREE",
        fields: [
          { name: "LOCK_TYPE" },
        ]
      },
    ]
  });
};

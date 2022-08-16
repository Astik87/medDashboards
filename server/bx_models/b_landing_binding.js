const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_binding', {
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
    BINDING_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BINDING_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_landing_binding',
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
        name: "IX_B_BINDING",
        using: "BTREE",
        fields: [
          { name: "BINDING_ID" },
          { name: "BINDING_TYPE" },
        ]
      },
      {
        name: "IX_B_ENTITY",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
      {
        name: "IX_B_BINDING_TYPE",
        using: "BTREE",
        fields: [
          { name: "BINDING_TYPE" },
        ]
      },
    ]
  });
};

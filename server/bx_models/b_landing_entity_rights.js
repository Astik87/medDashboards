const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_entity_rights', {
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
    TASK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ACCESS_CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ROLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_landing_entity_rights',
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
        name: "IX_ROLE",
        using: "BTREE",
        fields: [
          { name: "ROLE_ID" },
        ]
      },
    ]
  });
};

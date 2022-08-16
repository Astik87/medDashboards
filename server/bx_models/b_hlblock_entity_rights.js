const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_hlblock_entity_rights', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    HL_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    TASK_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ACCESS_CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_hlblock_entity_rights',
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
    ]
  });
};

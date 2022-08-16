const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_task_operation', {
    TASK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OPERATION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_task_operation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TASK_ID" },
          { name: "OPERATION_ID" },
        ]
      },
    ]
  });
};

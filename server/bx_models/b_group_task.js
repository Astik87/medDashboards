const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_group_task', {
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TASK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'b_group_task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
          { name: "TASK_ID" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_task', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LETTER: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SYS: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BINDING: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "module"
    }
  }, {
    sequelize,
    tableName: 'b_task',
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
        name: "ix_task",
        using: "BTREE",
        fields: [
          { name: "MODULE_ID" },
          { name: "BINDING" },
          { name: "LETTER" },
          { name: "SYS" },
        ]
      },
    ]
  });
};

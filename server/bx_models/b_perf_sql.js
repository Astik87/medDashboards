const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_sql', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HIT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COMPONENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QUERY_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODULE_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMPONENT_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SQL_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_sql',
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
        name: "IX_B_PERF_SQL_0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HIT_ID" },
          { name: "NN" },
        ]
      },
      {
        name: "IX_B_PERF_SQL_1",
        using: "BTREE",
        fields: [
          { name: "COMPONENT_ID" },
        ]
      },
    ]
  });
};

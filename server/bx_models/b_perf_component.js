const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_component', {
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
    NN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CACHE_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_R: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_W: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_C: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COMPONENT_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QUERIES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QUERIES_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    COMPONENT_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_component',
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
        name: "IX_B_PERF_COMPONENT_0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HIT_ID" },
          { name: "NN" },
        ]
      },
    ]
  });
};

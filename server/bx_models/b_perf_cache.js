const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_cache', {
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
    CACHE_SIZE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    OP_MODE: {
      type: DataTypes.CHAR(1),
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
    BASE_DIR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    INIT_DIR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FILE_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FILE_PATH: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_cache',
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
        name: "IX_B_PERF_CACHE_0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HIT_ID" },
          { name: "NN" },
        ]
      },
      {
        name: "IX_B_PERF_CACHE_1",
        using: "BTREE",
        fields: [
          { name: "COMPONENT_ID" },
        ]
      },
    ]
  });
};

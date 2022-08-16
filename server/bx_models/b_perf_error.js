const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_error', {
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
    ERRNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ERRSTR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ERRFILE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ERRLINE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_error',
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
        name: "IX_B_PERF_ERROR_0",
        using: "BTREE",
        fields: [
          { name: "HIT_ID" },
        ]
      },
    ]
  });
};

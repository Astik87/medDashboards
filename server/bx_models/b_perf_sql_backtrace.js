const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_sql_backtrace', {
    SQL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILE_NAME: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LINE_NO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLASS_NAME: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FUNCTION_NAME: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_sql_backtrace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SQL_ID" },
          { name: "NN" },
        ]
      },
    ]
  });
};

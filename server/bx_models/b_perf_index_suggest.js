const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_index_suggest', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SQL_MD5: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    SQL_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SQL_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TABLE_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TABLE_ALIAS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COLUMN_NAMES: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SQL_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SQL_EXPLAIN: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_index_suggest',
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
        name: "ix_b_perf_index_suggest_0",
        using: "BTREE",
        fields: [
          { name: "SQL_MD5" },
        ]
      },
    ]
  });
};

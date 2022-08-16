const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_index_suggest_sql', {
    SUGGEST_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SQL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_index_suggest_sql',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SUGGEST_ID" },
          { name: "SQL_ID" },
        ]
      },
      {
        name: "ix_b_perf_index_suggest_sql_0",
        using: "BTREE",
        fields: [
          { name: "SQL_ID" },
          { name: "SUGGEST_ID" },
        ]
      },
    ]
  });
};

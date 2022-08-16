const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_cluster', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    THREADS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HITS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ERRORS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAGES_PER_SECOND: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAGE_EXEC_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAGE_RESP_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_cluster',
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
    ]
  });
};

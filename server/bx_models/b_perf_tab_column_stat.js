const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_tab_column_stat', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TABLE_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COLUMN_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TABLE_ROWS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    COLUMN_ROWS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALUE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_tab_column_stat',
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
        name: "ix_b_perf_tab_column_stat",
        using: "BTREE",
        fields: [
          { name: "TABLE_NAME" },
          { name: "COLUMN_NAME" },
        ]
      },
    ]
  });
};

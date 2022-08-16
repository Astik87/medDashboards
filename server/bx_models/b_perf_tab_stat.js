const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_tab_stat', {
    TABLE_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    TABLE_SIZE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TABLE_ROWS: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_tab_stat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TABLE_NAME" },
        ]
      },
    ]
  });
};

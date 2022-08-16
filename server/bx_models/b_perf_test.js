const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_test', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REFERENCE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_test',
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
        name: "IX_B_PERF_TEST_0",
        using: "BTREE",
        fields: [
          { name: "REFERENCE_ID" },
        ]
      },
    ]
  });
};

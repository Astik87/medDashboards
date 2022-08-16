const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_urlchecker_status', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    HASH: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'b_landing_urlchecker_status',
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
        name: "IX_B_CHECKER_HASH",
        using: "BTREE",
        fields: [
          { name: "HASH" },
        ]
      },
    ]
  });
};

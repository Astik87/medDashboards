const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_stat_app', {
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_CODE: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rest_stat_app',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_ID" },
        ]
      },
      {
        name: "ix_b_rest_stat_app_code",
        using: "BTREE",
        fields: [
          { name: "APP_CODE" },
        ]
      },
    ]
  });
};

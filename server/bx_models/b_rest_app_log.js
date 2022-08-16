const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_app_log', {
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
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ACTION_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USER_ADMIN: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'b_rest_app_log',
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
        name: "ix_b_rest_app_log1",
        using: "BTREE",
        fields: [
          { name: "APP_ID" },
        ]
      },
    ]
  });
};

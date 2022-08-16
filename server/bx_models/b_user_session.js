const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_session', {
    SESSION_ID: {
      type: DataTypes.STRING(250),
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    SESSION_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SESSION_ID" },
        ]
      },
      {
        name: "ix_user_session_time",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};

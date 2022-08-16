const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_field_confirm', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CHANGE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    FIELD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FIELD_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONFIRM_CODE: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    ATTEMPTS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_user_field_confirm',
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
        name: "ix_b_user_field_confirm1",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CONFIRM_CODE" },
        ]
      },
    ]
  });
};

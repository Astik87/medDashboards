const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_profile_record', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HISTORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FIELD: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_profile_record',
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
        name: "ix_profile_record_history_field",
        using: "BTREE",
        fields: [
          { name: "HISTORY_ID" },
          { name: "FIELD" },
        ]
      },
    ]
  });
};

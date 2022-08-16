const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_admin_notify_lang', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOTIFY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_admin_notify_lang',
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
        name: "IX_ADM_NTFY_LANG",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NOTIFY_ID" },
          { name: "LID" },
        ]
      },
      {
        name: "IX_ADM_NTFY_LID",
        using: "BTREE",
        fields: [
          { name: "LID" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_virus', {
    ID: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SENT: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    INFO: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_sec_virus',
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
    ]
  });
};

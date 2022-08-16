const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iqsms_sender_template_site', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SID: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'iqsms_sender_template_site',
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
        name: "ix_tid_sid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TID" },
          { name: "SID" },
        ]
      },
    ]
  });
};

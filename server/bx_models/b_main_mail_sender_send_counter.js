const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_main_mail_sender_send_counter', {
    DATE_STAT: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    CNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_main_mail_sender_send_counter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DATE_STAT" },
          { name: "EMAIL" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_main_mail_blacklist', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CATEGORY_ID: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "UK_B_MAIN_MAIL_BLACKLIST_CODE"
    }
  }, {
    sequelize,
    tableName: 'b_main_mail_blacklist',
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
        name: "UK_B_MAIN_MAIL_BLACKLIST_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
    ]
  });
};

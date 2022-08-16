const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_captcha', {
    ID: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_captcha',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_CAPTCHA",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};

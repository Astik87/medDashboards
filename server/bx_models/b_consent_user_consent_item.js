const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_consent_user_consent_item', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_CONSENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALUE: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_consent_user_consent_item',
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
        name: "IX_B_CONSENT_USER_ITEM_AG_ID",
        using: "BTREE",
        fields: [
          { name: "USER_CONSENT_ID" },
        ]
      },
    ]
  });
};

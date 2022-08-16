const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_consent_user_consent', {
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
    AGREEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    ORIGIN_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ORIGINATOR_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_consent_user_consent',
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
        name: "IX_B_CONSENT_USER_CONSENT",
        using: "BTREE",
        fields: [
          { name: "AGREEMENT_ID" },
        ]
      },
      {
        name: "IX_CONSENT_USER_CONSENT_USER_ORIGIN",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "ORIGIN_ID" },
        ]
      },
    ]
  });
};

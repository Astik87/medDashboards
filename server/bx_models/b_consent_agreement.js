const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_consent_agreement', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DATA_PROVIDER: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    AGREEMENT_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LABEL_TEXT: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SECURITY_CODE: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    USE_URL: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IS_AGREEMENT_TEXT_HTML: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_consent_agreement',
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
        name: "IX_B_CONSENT_AGREEMENT_CODE",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
    ]
  });
};

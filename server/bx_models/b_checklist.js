const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_checklist', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_CREATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TESTER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMPANY_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TOTAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SUCCESS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAILED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PENDING: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SKIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STATE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REPORT_COMMENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REPORT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SENDED_TO_BITRIX: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    HIDDEN: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_checklist',
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

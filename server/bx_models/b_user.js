const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    LOGIN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CHECKWORD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LAST_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LAST_LOGIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_REGISTER: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    PERSONAL_PROFESSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_WWW: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_ICQ: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_GENDER: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PERSONAL_BIRTHDATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PERSONAL_PHOTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PERSONAL_PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_FAX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_MOBILE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_PAGER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_STREET: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PERSONAL_MAILBOX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_CITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_STATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_ZIP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_COUNTRY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_NOTES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WORK_COMPANY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_DEPARTMENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_POSITION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_WWW: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_FAX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_PAGER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_STREET: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WORK_MAILBOX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_CITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_STATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_ZIP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_COUNTRY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WORK_PROFILE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WORK_LOGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WORK_NOTES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ADMIN_NOTES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    STORED_HASH: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PERSONAL_BIRTHDAY: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EXTERNAL_AUTH_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CHECKWORD_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SECOND_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONFIRM_CODE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    LOGIN_ATTEMPTS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAST_ACTIVITY_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AUTO_TIME_ZONE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIME_ZONE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIME_ZONE_OFFSET: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BX_USER_ID: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    BLOCKED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    PASSWORD_EXPIRED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_user',
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
        name: "ix_login",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LOGIN" },
          { name: "EXTERNAL_AUTH_ID" },
        ]
      },
      {
        name: "ix_b_user_email",
        using: "BTREE",
        fields: [
          { name: "EMAIL" },
        ]
      },
      {
        name: "ix_b_user_activity_date",
        using: "BTREE",
        fields: [
          { name: "LAST_ACTIVITY_DATE" },
        ]
      },
      {
        name: "IX_B_USER_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "ix_user_last_login",
        using: "BTREE",
        fields: [
          { name: "LAST_LOGIN" },
        ]
      },
      {
        name: "ix_user_date_register",
        using: "BTREE",
        fields: [
          { name: "DATE_REGISTER" },
        ]
      },
    ]
  });
};

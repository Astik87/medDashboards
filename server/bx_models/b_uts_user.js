const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_uts_user', {
    VALUE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UF_PASS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DIRECTION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_EVENT_ID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_EVENT_URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REGPOLITICS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_TITLE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_COUNTRY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SPEC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_KEY_FACECAST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REGCOUNTRY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_REGPERSONAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SITEREG: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_SOURCE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_MEDIUM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_TERM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_CAMPAIGN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ACTIVITY_TOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_HASHE_EMAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_INTERESTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SMS_CODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CONFIRMED_PHONE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_FEEDBACK: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_uts_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VALUE_ID" },
        ]
      },
    ]
  });
};

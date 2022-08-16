const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_counter', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "**",
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    CNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    LAST_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "3000-01-01 00:00:00"
    },
    TAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAMS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SENT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'b_user_counter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "SITE_ID" },
          { name: "CODE" },
        ]
      },
      {
        name: "ix_buc_tag",
        using: "BTREE",
        fields: [
          { name: "TAG" },
        ]
      },
      {
        name: "ix_buc_code",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
      {
        name: "ix_buc_ts",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
      {
        name: "ix_buc_sent_userid",
        using: "BTREE",
        fields: [
          { name: "SENT" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};

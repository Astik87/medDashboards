const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_cookies_agreement', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SITE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CREATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODIFIED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'b_landing_cookies_agreement',
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
        name: "IX_B_SITE",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "CODE" },
        ]
      },
    ]
  });
};

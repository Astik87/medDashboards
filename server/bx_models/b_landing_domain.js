const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_domain', {
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
    DOMAIN: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROTOCOL: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PROVIDER: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    },
    FAIL_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PREV_DOMAIN: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_landing_domain',
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
        name: "IX_B_DOMAIN_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_DOMAIN_DOMAIN",
        using: "BTREE",
        fields: [
          { name: "DOMAIN" },
        ]
      },
      {
        name: "IX_B_DOMAIN_XML_ID",
        using: "BTREE",
        fields: [
          { name: "XML_ID" },
        ]
      },
      {
        name: "IX_B_DOMAIN_PROVIDER",
        using: "BTREE",
        fields: [
          { name: "PROVIDER" },
        ]
      },
    ]
  });
};
